import { WEATHER_PASSPHRASE } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getWeatherPassphrase = (wetherPassphrase) => ({
  type: WEATHER_PASSPHRASE,
  payload: wetherPassphrase,
});
