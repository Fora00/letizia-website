import { createServer } from 'node:http';
import { request as httpRequest } from 'node:http';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const VERSION_PORTS = { '1': 3001, '2': 3002 };

const __dir = dirname(fileURLToPath(import.meta.url));
const landing = readFileSync(join(__dir, 'proxy/index.html'), 'utf8');

function versionFromPath(pathname) {
  const m = (pathname || '').match(/^\/(\d+)(\/|$)/);
  return m && VERSION_PORTS[m[1]] ? m[1] : null;
}

function versionFromReferer(referer) {
  if (!referer) return null;
  try { return versionFromPath(new URL(referer).pathname); }
  catch { return null; }
}

function forward(req, res, port) {
  const proxyReq = httpRequest(
    {
      hostname: 'localhost',
      port,
      path: req.url,
      method: req.method,
      headers: { ...req.headers, host: `localhost:${port}` },
    },
    (proxyRes) => {
      const headers = { ...proxyRes.headers };
      // Rewrite redirect Location headers so browser stays on port 3000
      if (headers.location) {
        headers.location = headers.location.replace(
          `http://localhost:${port}`,
          'http://localhost:3000'
        );
      }
      res.writeHead(proxyRes.statusCode, headers);
      proxyRes.pipe(res, { end: true });
    }
  );
  proxyReq.on('error', () => { res.writeHead(502); res.end('upstream not ready'); });
  req.pipe(proxyReq, { end: true });
}

const server = createServer((req, res) => {
  const version = versionFromPath(req.url) ?? versionFromReferer(req.headers.referer);
  if (version) {
    forward(req, res, VERSION_PORTS[version]);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(landing);
});

// Forward WebSocket upgrades (HMR) based on path version
server.on('upgrade', (req, socket, head) => {
  const version = versionFromPath(req.url) ?? versionFromReferer(req.headers.origin) ?? '1';
  const port = VERSION_PORTS[version] ?? 3001;
  const conn = httpRequest({ hostname: 'localhost', port, path: req.url, headers: req.headers });
  conn.on('upgrade', (proxyRes, proxySocket) => {
    socket.write(
      `HTTP/1.1 101 Switching Protocols\r\n` +
      Object.entries(proxyRes.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n') +
      '\r\n\r\n'
    );
    proxySocket.pipe(socket, { end: true });
    socket.pipe(proxySocket, { end: true });
  });
  conn.on('error', () => socket.destroy());
  conn.end();
});

server.listen(3000, () => console.log('[proxy] http://localhost:3000'));
