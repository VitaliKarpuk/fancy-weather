import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import WeatherThreeDay from '../weather-three-day/weather-three-day';
import { getLocation } from '../../action/get-location';
import { getCurrentTemperature } from '../../action/getCurrentTemperature';
import { getCountry } from '../../action/getCountry';
import { KEY_API_LOCATION, KEY_API_WEATHER } from '../../constants/constants';
import DateNow from './dateNow';
import { changeClassNameWeatherCode } from '../../action/changeClassNameWeatherCode';
import { getIconWether } from '../../action/getIconWeather';
import { Loading } from '../../loading';

const WeatherToday = (props) => {
  const {
    getLocation,
    feelsLike,
    humidity,
    weatherCode,
    windSpeed,
    longitude,
    latitude,
    getCurrentTemperature,
    temperature,
    getCountry,
    country,
    city,
    language,
    weatherPassphrase,
    volumeSpeak,
    getIconWether,
    icon,
  } = props;
  const [onSpeak, setOnSpeak] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { longitude } = position.coords;
        const { latitude } = position.coords;
        getLocation(longitude, latitude);
      });
    }
  }, []);

  useEffect(() => {
    if (longitude) {
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&country=RU&days=3&units=M&lang=${language}&key=${KEY_API_WEATHER}`)
        .then((response) => response.json())
        .then((information) => {
          const iconWeatherToday = information.data[0].weather.icon;
          const iconWeatherTomorrow = information.data[1].weather.icon;
          const iconWeatherThirdDay = information.data[1].weather.icon;
          const feelsLike = (information.data[0].app_max_temp + +information.data[0].app_min_temp) / 2;
          const humidity = Math.ceil(information.data[0].rh);
          const windSpeed = information.data[0].wind_spd.toFixed(2);
          const weatherCode = information.data[0].weather.description.toUpperCase();
          const temperatureToday = information.data[0].temp;
          const temperatureSecondDay = information.data[1].temp;
          const temperatureThirdDay = information.data[2].temp;
          getIconWether(iconWeatherToday, iconWeatherTomorrow, iconWeatherThirdDay);
          getCurrentTemperature(feelsLike, humidity, windSpeed, weatherCode, temperatureToday, temperatureSecondDay, temperatureThirdDay);
        });
    }
  }, [longitude, latitude, language]);

  useEffect(() => {
    if (longitude && language) {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=${KEY_API_LOCATION}&language=${language}`)
        .then((response) => response.json())
        .then((data) => {
          const timeZone = data.results[0].annotations.timezone.name;
          const { country } = data.results[0].components;
          const city = data.results[0].components.city || data.results[0].components.town;
          getCountry(country, city, timeZone);
        });
    }
  }, [longitude, latitude, language]);


  const speak = () => {
    setOnSpeak((prev) => !prev);
  };

  useEffect(() => {
    if (weatherPassphrase === 'weather forecast' || weatherPassphrase === 'прогноз погоды' || weatherPassphrase === "прагноз надвор'я" || onSpeak) {
      const synth = window.speechSynthesis;
      if (language === 'en') {
        const utterancel = new SpeechSynthesisUtterance(`Today is weather forecast. In ${city},
        ${weatherCode},
        temperature ${Math.ceil(temperature.curentTemperature)}°, 
        humidity ${humidity} %
        and wind speed ${windSpeed}meters per second`);
        utterancel.lang = `${language}`;
        utterancel.volume = volumeSpeak;
        synth.speak(utterancel);
      } else if (language === 'ru') {
        const utterancel = new SpeechSynthesisUtterance(`Прогноз погоды на сегодня в  ${city},
        ${weatherCode},
        температура ${Math.ceil(temperature.curentTemperature)}°, 
        влажность ${humidity} %
        и скорость ветра ${windSpeed}метров в секунду`);
        utterancel.lang = `${language}`;
        utterancel.volume = volumeSpeak;
        synth.speak(utterancel);
      } else {
        const utterancel = new SpeechSynthesisUtterance(`прагноз надвор'я на сёння ${city},
        ${weatherCode},
        тэмпература ${Math.ceil(temperature.curentTemperature)}°, 
        вільготнасць ${humidity} %
        і хуткасць ветру${windSpeed}метраў у секунду`);
        utterancel.lang = `${language}`;
        utterancel.volume = volumeSpeak;
        synth.speak(utterancel);
      }
    }
  }, [weatherPassphrase, onSpeak]);


  return (
    <div className="weather__today">
      <div className="country__name">
        <span>{country}, {city}</span>
        <span className='speak' onClick={speak}>
          <i className="fas fa-volume-up"></i>
        </span>
      </div>
      <div className="current__date">
        <DateNow />
      </div>
      <div className="discription">
        <div className="current__temperature">{Math.ceil(temperature.curentTemperature)}</div>
        <div className="weather__description">
          <span>{weatherCode}</span>
          <span>{language === 'en' ? 'FEEL LIKES' : (language === 'ru') ? 'Ощущается' : 'Адчуваецца'}: {Math.ceil(feelsLike)}°</span>
          <span>{language === 'en' ? 'HUMIDITY' : (language === 'ru') ? 'Влажность' : 'Вільготнасць'}: {humidity} %</span>
          <span>{language === 'en' ? 'WIND SPEED' : (language === 'ru') ? 'Скорость ветра' : 'Хуткасць ветру'}: {windSpeed}
            {language === 'en' ? ' m/s' : ' м/с'}
          </span>
          <span className={loadingImg ? 'broken_clouds' : 'broken_clouds_hidden'}>
            <img src={`https://www.weatherbit.io/static/img/icons/${icon.today}.png`} onLoad={() => setLoadingImg(true)} />
          </span>
          <span className={!loadingImg ? 'loading' : 'loading_none'}><Loading /></span>

        </div>
      </div>
      <WeatherThreeDay weather={temperature} />
    </div >
  );
};

const mapStateToProps = (state) => {
  const {
    longitude, latitude, feelsLike, humidity, weatherCode,
    windSpeed, temperature, country, city, timeZone, language,
    classNameWeatherCode, weatherPassphrase, volumeSpeak, icon,
  } = state;
  return {
    longitude,
    latitude,
    feelsLike,
    humidity,
    weatherCode,
    windSpeed,
    temperature,
    country,
    city,
    timeZone,
    language,
    classNameWeatherCode,
    weatherPassphrase,
    volumeSpeak,
    icon,
  };
};

const mapDispatchToProps = {
  getLocation,
  getCurrentTemperature,
  getCountry,
  changeClassNameWeatherCode,
  getIconWether,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);
