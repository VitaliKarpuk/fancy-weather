import { GET_COUNTRY } from '../constants/constants';

export const getCountry = (country, city, timeZone) => {
  return{
      type: GET_COUNTRY,
      payload: {
        country,
        city,
        timeZone
      }
  }
}