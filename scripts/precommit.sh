#!/usr/bin/env bash
# Same gates as .github/workflows/deploy.yml, run before every commit:
# astro check -> build -> pa11y-ci (WCAG AA over every page in the sitemap).
# Skip in an emergency with: git commit --no-verify
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

# Nothing that affects the built site is staged -> nothing to check.
if ! git diff --cached --name-only | grep -qE '^(src/|public/|astro\.config|package(-lock)?\.json|tsconfig)'; then
  exit 0
fi

echo "pre-commit: astro check"
npx astro check

echo "pre-commit: build"
npm run build --silent

CHROME="${PUPPETEER_EXECUTABLE_PATH:-}"
for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" /usr/bin/google-chrome /usr/bin/chromium; do
  [ -z "$CHROME" ] && [ -x "$c" ] && CHROME="$c"
done
if [ -z "$CHROME" ]; then
  echo "pre-commit: Chrome not found, skipping pa11y (set PUPPETEER_EXECUTABLE_PATH). CI will still run it."
  exit 0
fi

PORT=$(python3 -c 'import socket; s=socket.socket(); s.bind(("",0)); print(s.getsockname()[1])')
python3 -m http.server "$PORT" --directory dist >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
sleep 1

echo "pre-commit: pa11y (accessibility)"
PUPPETEER_SKIP_DOWNLOAD=true PUPPETEER_EXECUTABLE_PATH="$CHROME" npx pa11y-ci \
  --sitemap "http://localhost:$PORT/sitemap-0.xml" \
  --sitemap-find "https://letiziamancini.it" \
  --sitemap-replace "http://localhost:$PORT"
