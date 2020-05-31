import { GET_COUNTRY } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getCountry = (country, city, timeZone) => ({
  type: GET_COUNTRY,
  payload: {
    country,
    city,
    timeZone,
  },
});
