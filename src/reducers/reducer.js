import {
  GET_LOCATION,
  GET_CURRENT_TEMPRATURE,
  CHANGE_BACKGROUND,
  GET_COUNTRY,
  CHANGE_FORMAT_GRADE,
  CONVERT_DEGREES,
  CHANGE_LANGUAGE,
  CHANGE_CLASSNAME_WEATHERCODE,
  WEATHER_PASSPHRASE,
  CHANGE_VOLUME_SPEAK,
  GET_ICON_WETHER,
} from '../constants/constants';

const initilState = {
  counter: 0,
  language: localStorage.getItem('Lang') || 'en',
  formatTemperature: JSON.parse(localStorage.getItem('formatGrade')) || 'C',
  latitude: null,
  longitude: null,
  feelsLike: null,
  humidity: null,
  temperature: {
    curentTemperature: null,
    temperatureSecondDay: null,
    temperatureThirdDay: null,
  },
  weatherCode: null,
  windSpeed: null,
  urlImg: null,
  country: null,
  city: null,
  timeZone: null,
  tz: null,
  classNameWeatherCode: null,
  weatherPassphrase: null,
  volumeSpeak: 0.5,
  dayWeek: null,
  icon: {
    today: null,
    tomorrow: null,
    thirdDay: null,
  },
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        tz: action.payload.tz,
        dayWeek: action.payload.dayWeek,
      };

    case GET_CURRENT_TEMPRATURE:
      return {
        ...state,
        feelsLike: action.payload.feelsLike,
        humidity: action.payload.humidity,
        temperature: {
          curentTemperature: action.payload.temperatureToday,
          temperatureSecondDay: action.payload.temperatureSecondDay,
          temperatureThirdDay: action.payload.temperatureThirdDay,
        },
        weatherCode: action.payload.weatherCode,
        windSpeed: action.payload.windSpeed,
      };
    case CHANGE_BACKGROUND:
      return {
        ...state,
        urlImg: action.payload.urlImg,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
        timeZone: action.payload.timeZone,
      };
    case CHANGE_FORMAT_GRADE:
      return {
        ...state,
        formatTemperature: action.payload,
      };
    case CONVERT_DEGREES:
      return {
        ...state,
        feelsLike: action.payload.feelsLike,
        temperature: {
          curentTemperature: action.payload.curentTemperature,
          temperatureSecondDay: action.payload.temperatureSecondDay,
          temperatureThirdDay: action.payload.temperatureThirdDay,
        },
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case CHANGE_CLASSNAME_WEATHERCODE:
      return {
        ...state,
        classNameWeatherCode: action.payload,
      };
    case WEATHER_PASSPHRASE:
      return {
        ...state,
        weatherPassphrase: action.payload,
      };
    case CHANGE_VOLUME_SPEAK:
      return {
        ...state,
        volumeSpeak: action.payload,
      };
    case GET_ICON_WETHER:
      return {
        ...state,
        icon: {
          today: action.payload.today,
          tomorrow: action.payload.tomorrow,
          thirdDay: action.payload.thirdDay,
        },
      };
    default:
      return state;
  }
};

export default reducer;
