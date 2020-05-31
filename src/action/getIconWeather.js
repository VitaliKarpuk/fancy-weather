import { GET_ICON_WETHER } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getIconWether = (today, tomorrow, thirdDay) => ({
  type: GET_ICON_WETHER,
  payload: {
    today,
    tomorrow,
    thirdDay,
  },
});
