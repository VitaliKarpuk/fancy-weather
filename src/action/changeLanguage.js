import { CHANGE_LANGUAGE } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
