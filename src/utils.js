export const gradeCalculation = (temprature, formatGrade) => {
  if (formatGrade === 'F') return temprature * 1.8 + 32;
  if (formatGrade === 'C') return (temprature - 32) / 1.8;
};

export const chooseOrientation = (width, height) => {
  if (width < height) {
    return 'portrait';
  }
  return 'landscape';
};
let init = 0.5;
export const getVolumeSpeak = (value) => {
  if ((value === 'louder' || value === 'громче' || value === 'гучней') && init <= 1) {
    init += 0.2;
    return init;
  } if ((value === 'quieter' || value === 'тише' || value === 'цішэй') && init >= 0) {
    init -= 0.2;
    return init;
  }
  return init;
};
