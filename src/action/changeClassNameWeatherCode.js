import { CHANGE_CLASSNAME_WEATHERCODE } from '../constants/constants';

export const changeClassNameWeatherCode = (className) => {
  return{
    type: CHANGE_CLASSNAME_WEATHERCODE,
    payload: className
  }
}