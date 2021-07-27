import React, { ReactElement, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import formatDateTime from 'utils/formatDateTime';
import LoadingIndicator from 'components/LoadingIndicator';

import { ReactComponent as PlaceIcon } from 'assets/place.svg';
import { ReactComponent as SunnyIcon } from 'assets/Sunny.svg';
import { ReactComponent as UpIcon } from 'assets/Up.svg';
import { ReactComponent as DownIcon } from 'assets/Down.svg';
import { ReactComponent as HumidityIcon } from 'assets/Humidity.svg';
import { ReactComponent as BarometerIcon } from 'assets/Barometer.svg';
import { ReactComponent as WindIcon } from 'assets/Wind.svg';
import { ReactComponent as SunsetIcon } from 'assets/Sunset.svg';
import { ReactComponent as SunriseIcon } from 'assets/Sunrise.svg';
import { ReactComponent as SandClockIcon } from 'assets/SandClock.svg';
import { ReactComponent as SunIcon } from 'assets/Sun.svg';
import { ReactComponent as CloudyIcon } from 'assets/Cloudy.svg';
import { ReactComponent as HazyIcon } from 'assets/Hazy.svg';
import {
  getWeatherData,
  GetWeatherDataResult,
  CurrentDataType,
  ForecastDataType,
} from './controllers/controller';
import {
  MainCardStyled,
  MainScreenStyled,
  WeatherItem,
  LoadingWrapper,
  RaisedItem,
} from './styled';

interface ParamTypes {
  id: string;
}

function MainScreen(): ReactElement {
  type SearchScreenState = {
    isLoaded: boolean;
    currentData: CurrentDataType | null;
    forecastData: ForecastDataType[];
  };

  const [today, setDate] = useState(new Date());

  const [state, setState] = useState<SearchScreenState>({
    isLoaded: false,
    currentData: null,
    forecastData: [],
  });

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    const loadData = async () => {
      const result: GetWeatherDataResult = await getWeatherData(id);
      setState((current) => ({
        ...current,
        isLoaded: true,
        currentData: result.currentData,
        forecastData: result.forecastData,
      }));
    };
    loadData();
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Quick error handler
  if (
    (!state.currentData ||
      !state.forecastData ||
      state.forecastData.length === 0) &&
    state.isLoaded
  ) {
    return (
      <MainScreenStyled>
        <div className="graphic" />
        <MainCardStyled>
          <LoadingWrapper>
            <h1>Something is wrong</h1>
          </LoadingWrapper>
        </MainCardStyled>
      </MainScreenStyled>
    );
  }

  return (
    <MainScreenStyled>
      <div className="graphic" />
      {state.isLoaded ? (
        <MainCardStyled>
          <div className="main-info">
            <div className="main-current-time">{formatDateTime(today)}</div>
            <div className="main-current-location">
              <Link to="/">
                {state.currentData?.city}
                <PlaceIcon className="location-icon" />
              </Link>
            </div>
          </div>
          <div className="main-current-weather">
            <div className="weather-row">
              <div className="weather-row-item">
                <SunnyIcon className="weather-main-icon" />
                <p className="weather-main-value">
                  {state.currentData?.description}
                </p>
              </div>
              <div className="weather-row-item">
                <div className="weather-main-temp">
                  {state.currentData?.temp}
                  <div className="temp-degrees">°C</div>
                </div>
              </div>
              <div className="weather-row-item">
                <p className="weather-main-minmax">
                  {state.currentData?.maxTemp}°C
                  <UpIcon className="minmax-icon" />
                </p>
                <p className="weather-main-minmax">
                  {state.currentData?.minTemp}°C
                  <DownIcon className="minmax-icon" />
                </p>
              </div>
            </div>
            <div className="weather-row">
              <div className="weather-row-item">
                <WeatherItem>
                  <HumidityIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.humidity} %
                  </p>
                  <p className="weather-item-title">Humidity</p>
                </WeatherItem>
              </div>
              <div className="weather-row-item">
                <WeatherItem>
                  <BarometerIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.pressure} mBar
                  </p>
                  <p className="weather-item-title">Pressure</p>
                </WeatherItem>
              </div>
              <div className="weather-row-item">
                <WeatherItem>
                  <WindIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.windSpeed} km/h
                  </p>
                  <p className="weather-item-title">Wind</p>
                </WeatherItem>
              </div>
            </div>
            <div className="weather-row">
              <div className="weather-row-item">
                <WeatherItem>
                  <SunriseIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.sunrise}
                  </p>
                  <p className="weather-item-title">Sunrise</p>
                </WeatherItem>
              </div>
              <div className="weather-row-item">
                <WeatherItem>
                  <SunsetIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.sunset}
                  </p>
                  <p className="weather-item-title">Sunset</p>
                </WeatherItem>
              </div>
              <div className="weather-row-item">
                <WeatherItem>
                  <SandClockIcon className="weather-item-icon" />
                  <p className="weather-item-value">
                    {state.currentData?.daytime}
                  </p>
                  <p className="weather-item-title">Daytime</p>
                </WeatherItem>
              </div>
            </div>
          </div>
          <div className="main-forecast">
            <div className="weather-row forecast-row">
              <div className="weather-row-item">
                <RaisedItem>
                  <WeatherItem>
                    <SunIcon className="weather-item-icon" />
                    <p className="weather-item-value">
                      {state.forecastData[0].date}
                    </p>
                    <div className="weather-item-title">
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[0].maxTemp}°C</p>
                        <UpIcon />
                      </div>
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[0].minTemp}°C</p>
                        <DownIcon />
                      </div>
                    </div>
                  </WeatherItem>
                </RaisedItem>
              </div>
              <div className="weather-row-item">
                <RaisedItem>
                  <WeatherItem>
                    <CloudyIcon className="weather-item-icon" />
                    <p className="weather-item-value">
                      {state.forecastData[1].date}
                    </p>
                    <div className="weather-item-title">
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[1].maxTemp}°C</p>
                        <UpIcon />
                      </div>
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[1].minTemp}°C</p>
                        <DownIcon />
                      </div>
                    </div>
                  </WeatherItem>
                </RaisedItem>
              </div>
              <div className="weather-row-item">
                <RaisedItem>
                  <WeatherItem>
                    <HazyIcon className="weather-item-icon" />
                    <p className="weather-item-value">
                      {state.forecastData[2].date}
                    </p>
                    <div className="weather-item-title">
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[2].maxTemp}°C</p>
                        <UpIcon />
                      </div>
                      <div className="forecast-maxmin">
                        <p>{state.forecastData[2].minTemp}°C</p>
                        <DownIcon />
                      </div>
                    </div>
                  </WeatherItem>
                </RaisedItem>
              </div>
            </div>
          </div>
        </MainCardStyled>
      ) : (
        <MainCardStyled>
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        </MainCardStyled>
      )}
    </MainScreenStyled>
  );
}

export default MainScreen;
