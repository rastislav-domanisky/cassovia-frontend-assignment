import getCurrentWeather from 'utils/weather_service/current_weather';
import getForecast from 'utils/weather_service/forecast';
import { WeatherResult } from 'utils/weather_service';
import moment from 'moment';

export type CurrentDataType = {
  description: string;
  temp: string;
  maxTemp: string;
  minTemp: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
  sunrise: string;
  sunset: string;
  daytime: string;
  city: string;
};

export type ForecastDataType = {
  date: string;
  minTemp: string;
  maxTemp: string;
};

export type GetWeatherDataResult = {
  isOK: boolean;
  currentData: CurrentDataType | null;
  forecastData: Array<ForecastDataType>;
};

const formatAMPM = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  const newHours = hours || 12;
  const newMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${newHours}:${newMinutes} ${ampm}`;
  return strTime;
};

const calculateTimeDifference = (start: Date, end: Date): string => {
  const startTime = moment(start);
  const endTime = moment(end);
  const duration = moment.duration(endTime.diff(startTime));
  const hours = Math.round(duration.asHours());
  const minutes = Math.round(duration.asMinutes() % 60);
  return `${hours}h ${minutes}m`;
};

const getWeatherData = async (id: string): Promise<GetWeatherDataResult> => {
  let isAllOK = true;
  let currentDataResult: CurrentDataType | null = null;
  let forecastDataResult: Array<ForecastDataType> = [];

  const currentDataResponse: WeatherResult = await getCurrentWeather(id);
  const forecastDataResponse: WeatherResult = await getForecast(id);

  if (currentDataResponse.isOK) {
    const sunrise = new Date(currentDataResponse.data.sys.sunrise * 1000);
    const sunset = new Date(currentDataResponse.data.sys.sunset * 1000);
    const dayTime = calculateTimeDifference(sunrise, sunset);

    currentDataResult = {
      description: currentDataResponse.data.weather[0].main,
      temp: Math.round(currentDataResponse.data.main.temp).toString(),
      maxTemp: Math.round(currentDataResponse.data.main.temp_max).toString(),
      minTemp: Math.round(currentDataResponse.data.main.temp_min).toString(),
      humidity: currentDataResponse.data.main.humidity,
      pressure: currentDataResponse.data.main.pressure,
      windSpeed: Math.round(currentDataResponse.data.wind.speed).toString(),
      sunrise: formatAMPM(sunrise),
      sunset: formatAMPM(sunset),
      daytime: dayTime,
      city: currentDataResponse.data.name,
    };
  } else {
    isAllOK = false;
  }

  if (forecastDataResponse.isOK) {
    const newForecastData: ForecastDataType[] = [];
    for (let i = 0; i < 3; i += 1) {
      const dateObj = new Date(
        forecastDataResponse.data.daily[i + 1].dt * 1000,
      );
      const weekDay = dateObj.toLocaleString('en', { weekday: 'short' });
      const day = dateObj.getDate();
      newForecastData.push({
        date: `${weekDay}, ${day}`,
        maxTemp: Math.round(
          forecastDataResponse.data.daily[i + 1].temp.max,
        ).toString(),
        minTemp: Math.round(
          forecastDataResponse.data.daily[i + 1].temp.min,
        ).toString(),
      });
    }
    forecastDataResult = newForecastData;
  } else {
    isAllOK = false;
  }

  return {
    isOK: isAllOK,
    currentData: currentDataResult,
    forecastData: forecastDataResult,
  };
};

export { getWeatherData };
