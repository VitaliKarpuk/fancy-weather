import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { KEY_API_WEATHER, KEY_TRANSLATE } from '../../constants/constants';
import {
  getFirstDayWeek, getSecondDayWeek, getThirdDayWeek, getFourDayWeek, getFiveDayWeek,
} from '../../utils';


const Ticker = ({
  latitude, longitude, language, dayWeek,
}) => {
  const [textDayDescription, setTextDayDescription] = useState('');
  const [dayWeekTranslate, setDayWeekTranslate] = useState('');
  const [dayOne, setdayOne] = useState('');
  const [dayTwo, setdayTwo] = useState('');
  const [dayThird, setdayThird] = useState('');
  const [dayFour, setdayFour] = useState('');
  const [dayFive, setdayFive] = useState('');
  const [wind, setWind] = useState('');
  const [speedWind, setSpeedWind] = useState('');
  const [temperatureMin, setTemperatureMin] = useState('');
  const [temperatureMax, setTemperatureMax] = useState('');
  const [humidityTranslate, sethHumidityTranslate] = useState('');
  const [humidity, sethHumidity] = useState('');
  useEffect(() => {
    if (language) {
      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=${language}&text=${dayWeekTranslate}`)
        .then((response) => response.json())
        .then(({ text }) => {
          const days = text.join(',').split(',');
          setdayOne(days[0]);
          setdayTwo(days[1]);
          setdayThird(days[2]);
          setdayFour(days[3]);
          setdayFive(days[4]);
        });
    }
  }, [language, dayWeekTranslate]);
  useEffect(() => {
    if (latitude && language) {
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&country=RU&days=5&units=M&lang=${language}&key=${KEY_API_WEATHER}`)
        .then((response) => response.json())
        .then(({ data }) => {
          const dayOne = getFirstDayWeek(dayWeek);
          const dayOneTemMin = Math.floor(data[0].app_min_temp);
          const dayOneTemMax = Math.floor(data[0].app_max_temp);
          const dayOneDescription = data[0].weather.description;
          const dayOneWind = Math.floor(data[0].wind_spd);
          const dayOneHum = Math.floor(data[0].rh);

          const dayTwo = getSecondDayWeek(dayWeek);
          const dayTwoTemMin = Math.floor(data[1].app_min_temp);
          const dayTwoTemMax = Math.floor(data[2].app_max_temp);
          const dayTwoDescription = data[1].weather.description;
          const dayTwoWind = Math.floor(data[1].wind_spd);
          const dayTwoHum = Math.floor(data[1].rh);

          const dayThird = getThirdDayWeek(dayWeek);
          const dayThirdTemMin = Math.floor(data[2].app_min_temp);
          const dayThirdTemMax = Math.floor(data[2].app_max_temp);
          const dayThirdDescription = data[2].weather.description;
          const dayThirdWind = Math.floor(data[2].wind_spd);
          const dayThirdHum = Math.floor(data[2].rh);

          const dayFour = getFourDayWeek(dayWeek);
          const dayFourTemMin = Math.floor(data[3].app_min_temp);
          const dayFourTemMax = Math.floor(data[3].app_max_temp);
          const dayFourDescription = data[3].weather.description;
          const dayFourWind = Math.floor(data[3].wind_spd);
          const dayFourHum = Math.floor(data[3].rh);

          const dayFive = getFiveDayWeek(dayWeek);
          const dayFiveTemMin = Math.floor(data[4].app_min_temp);
          const dayFiveTemMax = Math.floor(data[4].app_max_temp);
          const dayFiveDescription = data[4].weather.description;
          const dayFiveWind = Math.floor(data[4].wind_spd);
          const dayFiveHum = Math.floor(data[4].rh);
          language === 'en' ? setWind('wind') : (language === 'ru') ? setWind('ветер') : setWind('вецер');
          language === 'en' ? sethHumidityTranslate('humidity') : (language === 'ru') ? sethHumidityTranslate('влажность') : sethHumidityTranslate('вільготнасці');
          setTemperatureMin(`${dayOneTemMin}, ${dayTwoTemMin}, ${dayThirdTemMin}, ${dayFourTemMin}, ${dayFiveTemMin}`.split(','));
          setTemperatureMax(`${dayOneTemMax}, ${dayTwoTemMax}, ${dayThirdTemMax}, ${dayFourTemMax}, ${dayFiveTemMax}`.split(','));
          setDayWeekTranslate(`${dayOne}, ${dayTwo}, ${dayThird}, ${dayFour}, ${dayFive}`);
          setSpeedWind(`${dayOneWind}, ${dayTwoWind}, ${dayThirdWind}, ${dayFourWind}, ${dayFiveWind}`.split(','));
          sethHumidity(`${dayOneHum}, ${dayTwoHum}, ${dayThirdHum}, ${dayFourHum}, ${dayFiveHum}`.split(','));
          setTextDayDescription(`${dayOneDescription.toLowerCase()}, ${dayTwoDescription.toLowerCase()}, ${dayThirdDescription.toLowerCase()},
          ${dayFourDescription.toLowerCase()}, ${dayFiveDescription.toLowerCase()}`.split(','));
        });
    }
  }, [latitude, language]);
  return (
    <div class="marquee">
      <p>
        <span>
          {dayOne} : {temperatureMin[0]}° - {temperatureMax[0]}° {wind} : {speedWind[0]}
          {language === 'en' ? 'm/s' : 'м/с'} {humidityTranslate} : {humidity[0]}% {textDayDescription[0]}
        </span>
        <span>
          {dayTwo} : {temperatureMin[1]}° - {temperatureMax[1]}° {wind} : {speedWind[1]}
          {language === 'en' ? 'm/s' : 'м/с'} {humidityTranslate} : {humidity[1]}% {textDayDescription[1]}
        </span>
        <span>
          {dayThird} : {temperatureMin[2]}° - {temperatureMax[2]}° {wind} : {speedWind[2]}
          {language === 'en' ? 'm/s' : 'м/с'} {humidityTranslate} : {humidity[2]}% {textDayDescription[2]}
        </span>
        <span>
          {dayFour} : {temperatureMin[3]}° - {temperatureMax[3]}° {wind} : {speedWind[3]}
          {language === 'en' ? 'm/s' : 'м/с'} {humidityTranslate} : {humidity[3]}% {textDayDescription[3]}
        </span>
        <span>
          {dayFive} : {temperatureMin[4]}° - {temperatureMax[4]}° {wind} : {speedWind[4]}
          {language === 'en' ? 'm/s' : 'м/с'} {humidityTranslate} : {humidity[4]}% {textDayDescription[4]}
        </span>
      </p>
    </div>
  );
};

const mapStateToProps = ({
  latitude, language, longitude, dayWeek,
}) => ({
  latitude,
  language,
  longitude,
  dayWeek,
});
export default connect(mapStateToProps)(Ticker);
