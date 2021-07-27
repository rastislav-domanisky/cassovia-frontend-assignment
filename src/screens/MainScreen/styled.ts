import styled from 'styled-components';

export const MainScreenStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .graphic {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
  }
`;

export const MainCardStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70vh;
  background: #ffffff;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;

  .main-info {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    .main-current-time {
      box-sizing: border-box;
      height: 100%;
      border-top-left-radius: 30px;
      font-family: Barlow;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #999999;
      width: 230px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .main-current-location {
      background: rgba(13, 159, 234, 0.08);
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      color: #0da0ea;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;

      a {
        color: #0da0ea;
      }

      &:hover {
        background: rgba(13, 160, 234, 0.5);
        color: #fff;
      }

      .location-icon {
        box-sizing: border-box;
        padding: 0px 2px;
        height: 13px;
        width: 20px;
        path {
          fill: #0d9fea;
        }
      }
    }
  }

  .main-current-weather {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
  }

  .main-forecast {
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    padding: 20px 10px;
  }

  .weather-row {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;

    .weather-row-item {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;

      .weather-main-icon {
        box-sizing: border-box;
        path {
          fill: #aaaaaa;
        }
      }

      .weather-main-value {
        box-sizing: border-box;
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #000000;
      }

      .weather-main-temp {
        box-sizing: border-box;
        font-family: Barlow;
        font-style: normal;
        font-weight: 300;
        font-size: 64px;
        letter-spacing: -0.05em;
        color: #000000;
        display: flex;
        flex-direction: row;

        .temp-degrees {
          box-sizing: border-box;
          padding-top: 10px;
          height: 100%;
          font-family: Barlow;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: #666666;
        }
      }

      .weather-main-minmax {
        box-sizing: border-box;
        font-family: Barlow;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #666666;

        .minmax-icon {
          box-sizing: border-box;
          padding: 0px 2px;
          width: 10px;
          height: 10px;

          path {
            fill: #aaaaaa;
          }
        }
      }
    }
  }

  .forecast-row {
    box-sizing: border-box;
    padding: 20px 0;
  }
`;

export const WeatherItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .weather-item-icon {
    box-sizing: border-box;
    height: 24px;

    path {
      fill: #aaaaaa;
    }
  }

  .weather-item-value {
    box-sizing: border-box;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.05em;
    line-height: 19px;
    color: #444444;
  }

  .weather-item-title {
    box-sizing: border-box;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #999999;
    line-height: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3px;
    padding: 3px 0;

    .forecast-maxmin {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1px;
    }
  }
`;

export const LoadingWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RaisedItem = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  height: 100px;
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
