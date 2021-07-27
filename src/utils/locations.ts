// ID - from OpenWeatherMap

export type Location = {
  city: string;
  id: string;
  geo: {
    lat: string;
    lng: string;
  };
};

const locations: Array<Location> = [
  {
    city: 'Bratislava',
    id: '3060972',
    geo: {
      lng: '17.1067',
      lat: '48.1482',
    },
  },
  {
    city: 'Humenné',
    id: '724627',
    geo: {
      lng: '21.9163',
      lat: '48.9371',
    },
  },
  {
    city: 'Koromľa',
    id: '690548',
    geo: {
      lng: '22.3',
      lat: '48.6167',
    },
  },
  {
    city: 'Košice',
    id: '865084',
    geo: {
      lng: '21.3333',
      lat: '48.6667',
    },
  },
  {
    city: 'Michalovce',
    id: '724144',
    geo: {
      lng: '21.9195',
      lat: '48.7543',
    },
  },
  {
    city: 'Sobrance',
    id: '723554',
    geo: {
      lng: '22.1814',
      lat: '48.7445',
    },
  },
];

export default locations;
