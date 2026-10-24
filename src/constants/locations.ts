// Where Letizia receives. Single source of truth for footer, contact page,
// JSON-LD, llms.txt and the vCard. `mapsUrl` searches venue + address so
// Google Maps always lands on the right spot.
export interface Location {
  city: string;
  venue?: string;
  street: string;
  postalCode: string;
  region: string;
  mapsUrl: string;
}

const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const locations: Location[] = [
  {
    city: 'Trento',
    street: 'Via Brescia, 15',
    postalCode: '38122',
    region: 'TN',
    mapsUrl: maps('Via Brescia 15, 38122 Trento TN'),
  },
  {
    city: 'Rovereto',
    venue: 'Più Club',
    street: 'Via Brione, 39',
    postalCode: '38068',
    region: 'TN',
    mapsUrl: maps('Più Club, Via Brione 39, 38068 Rovereto TN'),
  },
  {
    city: 'Lavis',
    venue: 'Essere Centro',
    street: 'Via dei Felti, 2/A',
    postalCode: '38015',
    region: 'TN',
    mapsUrl: maps('Essere Centro, Via dei Felti 2/A, 38015 Lavis TN'),
  },
];
