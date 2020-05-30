import { GET_LOCATION } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getLocation = (longitude, latitude, tz, dayWeek) => ({
  type: GET_LOCATION,
  payload: {
    longitude,
    latitude,
    tz,
    dayWeek,
  },
});
