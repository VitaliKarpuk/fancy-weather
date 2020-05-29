import { CHANGE_VOLUME_SPEAK } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const changeVolumeSpeak = (volumeSpeak) => ({
  type: CHANGE_VOLUME_SPEAK,
  payload: volumeSpeak,
});
