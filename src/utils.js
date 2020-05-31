export const convertFahrenheit = (temprature) => temprature * 1.8 + 32;

export const convertCelsius = (temprature) => (temprature - 32) / 1.8;

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
    return +init.toFixed(1);
  } if ((value === 'quieter' || value === 'тише' || value === 'цішэй') && init >= 0) {
    init -= 0.2;
    return +init.toFixed(1);
  }
  return init;
};

export const conversionToMin = (value) => {
  if (value) {
    const degree = value.toString().split('');
    degree.splice(0, degree.indexOf('.'), '0');
    return +degree.join('') * 60;
  }
};

export const conversionToSec = (value) => {
  if (value) {
    const degree = value.toString().split('');
    degree.splice(0, degree.indexOf('.'), '0');
    return +degree.join('') * 60;
  }
};

export const getDegreeMinAndSec = (latitude, degreeMin, degreeSec) => `${Math.trunc(latitude)}° ${Math.trunc(degreeMin)}" ${Math.trunc(degreeSec)}'`;

const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const getFirstDayWeek = (dayWeek) => {
  if (!dayWeek && new Date().getDay() === 0) return daysWeek[6];
  if (!dayWeek) return daysWeek[new Date().getDay() - 1];
  return daysWeek[dayWeek - 1];
};

export const getSecondDayWeek = (dayWeek) => {
  if (dayWeek === 7) return daysWeek[0];
  if (!dayWeek) return daysWeek[new Date().getDay()];
  return daysWeek[dayWeek];
};

export const getThirdDayWeek = (dayWeek) => {
  if (dayWeek === 7) return daysWeek[1];
  if (dayWeek === 6) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 6) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 7) return daysWeek[1];
  if (!dayWeek) return daysWeek[new Date().getDay() + 1];
  return daysWeek[dayWeek + 1];
};

export const getFourDayWeek = (dayWeek) => {
  if (dayWeek === 7) return daysWeek[2];
  if (dayWeek === 6) return daysWeek[1];
  if (dayWeek === 5) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 5) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 6) return daysWeek[1];
  if (!dayWeek && new Date().getDay() === 7) return daysWeek[2];
  if (!dayWeek) return daysWeek[new Date().getDay() + 2];
  return daysWeek[dayWeek + 2];
};

export const getFiveDayWeek = (dayWeek) => {
  if (dayWeek === 7) return daysWeek[3];
  if (dayWeek === 6) return daysWeek[2];
  if (dayWeek === 5) return daysWeek[1];
  if (dayWeek === 4) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 4) return daysWeek[0];
  if (!dayWeek && new Date().getDay() === 5) return daysWeek[1];
  if (!dayWeek && new Date().getDay() === 6) return daysWeek[2];
  if (!dayWeek && new Date().getDay() === 7) return daysWeek[3];
  if (!dayWeek) return daysWeek[new Date().getDay() + 3];
  return daysWeek[dayWeek + 3];
};

