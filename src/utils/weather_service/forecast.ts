import weatherService, { WeatherResult } from 'utils/weather_service/index';
import locations from 'utils/locations';

const getForecast = async (cityId: string): Promise<WeatherResult> => {
  const filteredLocations = locations.filter((obj) => obj.id === cityId);

  if (filteredLocations.length === 0) {
    return {
      isOK: false,
      data: null,
    };
  }

  const response = await weatherService.get('/onecall', {
    params: {
      lat: filteredLocations[0].geo.lat,
      lon: filteredLocations[0].geo.lng,
      exclude: 'minutely,hourly,alerts',
    },
  });
  if (response.status === 200) {
    return {
      isOK: true,
      data: response.data,
    };
  }
  return {
    isOK: false,
    data: null,
  };
};

export default getForecast;
