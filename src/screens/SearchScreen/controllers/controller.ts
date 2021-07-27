import getCurrentWeather from 'utils/weather_service/current_weather';
import locations from 'utils/locations';
import { WeatherResult } from 'utils/weather_service';

export type LocationListItemData = {
  id: string;
  name: string;
  temp: string;
};

export type LocationListResult = {
  isOK: boolean;
  data: Array<LocationListItemData>;
};

const getLocationsData = async (): Promise<LocationListResult> => {
  let isAllOK = true;
  const resultList: Array<LocationListItemData> = [];

  await Promise.all(
    locations.map(async (location) => {
      if (isAllOK) {
        const result: WeatherResult = await getCurrentWeather(location.id);
        if (result.isOK) {
          resultList.push({
            id: location.id,
            name: location.city,
            temp: `${result.data.main.temp.toString()} °C`,
          });
        } else {
          isAllOK = false;
        }
      }
    }),
  );

  return {
    isOK: isAllOK,
    data: resultList,
  };
};

export { getLocationsData };
