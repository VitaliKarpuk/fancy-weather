import { GET_CURRENT_TEMPRATURE } from '../constants/constants';

export const getCurrentTemperature = ( feelsLike, humidity, windSpeed, weatherCode, temperatureToday, temperatureSecondDay, temperatureThirdDay ) => {
  return{
    type: GET_CURRENT_TEMPRATURE,
    payload: {
      feelsLike,
      humidity,
      temperatureToday,
      temperatureSecondDay,
      temperatureThirdDay,
      weatherCode,
      windSpeed,
    }
  }
}