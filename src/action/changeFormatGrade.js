import { CHANGE_FORMAT_GRADE } from '../constants/constants';

export const changeFormatGrade = (format) => {
  return{
    type: CHANGE_FORMAT_GRADE,
    payload: format
  }
}