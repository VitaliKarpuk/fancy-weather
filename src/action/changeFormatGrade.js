import { CHANGE_FORMAT_GRADE } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const changeFormatGrade = (format) => ({
  type: CHANGE_FORMAT_GRADE,
  payload: format,
});
