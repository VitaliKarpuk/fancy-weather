import { GET_LOCATION } from '../constants/constants';

export const getLocation = (longitude, latitude, tz) => {
  return{
      type: GET_LOCATION,
      payload: {
        longitude,
        latitude,
        tz
      }
  }
}