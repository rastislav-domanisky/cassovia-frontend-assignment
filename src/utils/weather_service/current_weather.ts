import weatherService, { WeatherResult } from 'utils/weather_service/index';

const getCurrentWeather = async (cityId: string): Promise<WeatherResult> => {
  const response = await weatherService.get('/weather', {
    params: {
      id: cityId,
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

export default getCurrentWeather;
