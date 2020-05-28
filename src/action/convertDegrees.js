import { CONVERT_DEGREES } from '../constants/constants';

export const convertDegrees = (curentTemperature, temperatureSecondDay, temperatureThirdDay, feelsLike) => {
  return {
    type: CONVERT_DEGREES,
    payload: {
      curentTemperature,
      temperatureSecondDay,
      temperatureThirdDay,
      feelsLike
    }
  }
}

