import { CHANGE_CLASSNAME_WEATHERCODE } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const changeClassNameWeatherCode = (className) => ({
  type: CHANGE_CLASSNAME_WEATHERCODE,
  payload: className,
});
