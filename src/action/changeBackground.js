import { CHANGE_BACKGROUND } from '../constants/constants';

export const changeBackground = (urlImg) => {
  return{
    type: CHANGE_BACKGROUND,
    payload: { urlImg } 
  }
}