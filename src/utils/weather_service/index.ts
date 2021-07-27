import axios from 'axios';

// OpenWeatherMap API key
const API_KEY = '3d87cbf51be057b72d31437825f74fd2';

export type WeatherResult = {
  isOK: boolean;
  data: any;
};

const weatherService = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  method: 'GET',
  params: {
    units: 'metric',
    appid: API_KEY,
  },
});

export default weatherService;
