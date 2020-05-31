import { CONVERT_DEGREES } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const convertDegrees = (curentTemperature, temperatureSecondDay, temperatureThirdDay, feelsLike) => ({
  type: CONVERT_DEGREES,
  payload: {
    curentTemperature,
    temperatureSecondDay,
    temperatureThirdDay,
    feelsLike,
  },
});
