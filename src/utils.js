export const gradeCalculation = (temprature, formatGrade) => {
  if (formatGrade === 'F') return temprature * 1.8 + 32;
  if (formatGrade === 'C') return (temprature - 32) / 1.8;
}

export const chooseOrientation = (width, height) => {
  if (width < height) {
    return 'portrait';
  }
  return 'landscape';
}