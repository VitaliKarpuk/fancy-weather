import {
  convertFahrenheit,
  convertCelsius,
  getVolumeSpeak,
  chooseOrientation,
  conversionToMin,
  conversionToSec,
  getFirstDayWeek,
  getSecondDayWeek,
  getThirdDayWeek,
  getDegreeMinAndSec,
} from '../utils';

describe('Сelsius to fahrenheit', () => {
  test('adds temperature 22 to equal 71.6', () => {
    expect(convertFahrenheit(22)).toBe(71.6);
    expect(convertFahrenheit(15)).toBe(59);
    expect(convertFahrenheit(12)).toBe(53.6);
  });
});

describe('Fahrenheit to celsius', () => {
  test('adds temperature 50 to equal 10', () => {
    expect(convertCelsius(50)).toBe(10);
    expect(convertCelsius(53.6)).toBe(12);
    expect(convertCelsius(41)).toBe(5);
  });
});

describe('Change valume speak', () => {
  test('adds value louder to equal 0.7', () => {
    expect(getVolumeSpeak('louder')).toBe(0.7);
    expect(getVolumeSpeak('quieter')).toBe(0.5);
    expect(getVolumeSpeak('quieter')).toBe(0.3);
  });
});

describe('Choose orientation', () => {
  test('define screen orientation', () => {
    expect(chooseOrientation(300, 200)).toBe('landscape');
    expect(chooseOrientation(300, 400)).toBe('portrait');
    expect(chooseOrientation(550, 560)).toBe('portrait');
  });
});

describe('coordinates to min', () => {
  test('coordinates 14.51 to qual 30.6', () => {
    expect(conversionToMin(27.5677184)).toBe(34.063103999999996);
    expect(conversionToMin(-0.11)).toBe(6.6);
    expect(conversionToMin(14.51)).toBe(30.6);
  });
});

describe('coordinates to sec', () => {
  test('coordinates 14.51 to qual 30.6', () => {
    expect(conversionToSec(53.415167999999994)).toBe(24.91007999999964);
    expect(conversionToSec(31.200000000000003)).toBe(12.000000000000181);
    expect(conversionToSec(54)).toBe(3240);
  });
});

describe('Definition of the current day of the week', () => {
  test('number day 1 to string day Monday', () => {
    expect(getFirstDayWeek(1)).toBe('Monday');
    expect(getFirstDayWeek(3)).toBe('Wednesday');
    expect(getFirstDayWeek(7)).toBe('Sunday');
  });
});

describe('Definition next day of the week', () => {
  test('number current day 1 to string day Tuesday', () => {
    expect(getSecondDayWeek(1)).toBe('Tuesday');
    expect(getSecondDayWeek(3)).toBe('Thursday');
    expect(getSecondDayWeek(7)).toBe('Monday');
  });
});

describe('Definition third day of the week', () => {
  test('number current day 1 to string day Wednesday', () => {
    expect(getThirdDayWeek(1)).toBe('Wednesday');
    expect(getThirdDayWeek(3)).toBe('Friday');
    expect(getThirdDayWeek(7)).toBe('Tuesday');
  });
});

describe('getting coordination in minutes and seconds', () => {
  test('number current day 1 to string day Wednesday', () => {
    expect(getDegreeMinAndSec(27.5677184, 53.415167999999994, 24.91007999999964)).toBe('27° 53" 24\'');
    expect(getDegreeMinAndSec(-0.11, 31.200000000000003, 12.000000000000181)).toBe('0° 31" 12\'');
    expect(getDegreeMinAndSec(14.51, 54, 3240)).toBe('14° 54" 3240\'');
  });
});
