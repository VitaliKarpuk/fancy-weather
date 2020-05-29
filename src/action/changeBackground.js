import { CHANGE_BACKGROUND } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const changeBackground = (urlImg) => ({
  type: CHANGE_BACKGROUND,
  payload: { urlImg },
});
