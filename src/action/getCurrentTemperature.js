import { GET_CURRENT_TEMPRATURE } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getCurrentTemperature = (feelsLike, humidity, windSpeed, weatherCode, temperatureToday, temperatureSecondDay, temperatureThirdDay) => ({
  type: GET_CURRENT_TEMPRATURE,
  payload: {
    feelsLike,
    humidity,
    temperatureToday,
    temperatureSecondDay,
    temperatureThirdDay,
    weatherCode,
    windSpeed,
  },
});
