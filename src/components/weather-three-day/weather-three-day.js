import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { KEY_TRANSLATE } from '../../constants/constants';
import { getFirstDayWeek, getSecondDayWeek, getThirdDayWeek } from '../../utils';
import { Loading } from '../../loading';

// eslint-disable-next-line object-curly-newline
const WeatherThreeDay = ({ weather, language, dayWeek, icon }) => {
  const [day, setDay] = useState([]);
  const [loadingImg, setLoadingImg] = useState(false);
  useEffect(() => {
    if (weather && language) {
      const firstDay = getFirstDayWeek(dayWeek);
      const secondDay = getSecondDayWeek(dayWeek);
      const thirdDay = getThirdDayWeek(dayWeek);
      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=${language}&text=${firstDay},${secondDay},${thirdDay}`)
        .then((response) => response.json())
        .then((data) => {
          const first = data.text[0].split(',')[0];
          const second = data.text[0].split(',')[1];
          const third = data.text[0].split(',')[2];
          setDay([first, second, third]);
        });
    }
  }, [language, dayWeek]);
  return (
    <div className='weather-three-day'>
      <div>
        <div>
          <span>{day[0]}</span>
          <span>{Math.ceil(weather.curentTemperature)}°</span>
        </div>
        <span className={loadingImg ? 'weather_icon' : 'broken_clouds_hidden'}>
          <img src={`https://www.weatherbit.io/static/img/icons/${icon.today}.png`} onLoad={() => setLoadingImg(true)}/>
        </span>
        <span className={!loadingImg ? 'loading loading_day_one' : 'loading_none'}><Loading /></span>
      </div>
      <div>
        <div>
          <span>{day[1]}</span>
          <span>{Math.ceil(weather.temperatureSecondDay)}°</span>
        </div>
        <span className={loadingImg ? 'weather_icon' : 'broken_clouds_hidden'}>
          <img src={`https://www.weatherbit.io/static/img/icons/${icon.tomorrow}.png`} onLoad={() => setLoadingImg(true)} />
        </span>
        <span className={!loadingImg ? 'loading loading_day_one' : 'loading_none'}><Loading /></span>
      </div>
      <div>
        <div>
          <span>{day[2]}</span>
          <span>{Math.ceil(weather.temperatureThirdDay)}°</span>
        </div>
        <span className={loadingImg ? 'weather_icon' : 'broken_clouds_hidden'}>
            <img src={`https://www.weatherbit.io/static/img/icons/${icon.today}.png`} onLoad={() => setLoadingImg(true)}/>
          </span>
        <span className={!loadingImg ? 'loading loading_day_one' : 'loading_none'}><Loading /></span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ language, dayWeek, icon }) => ({
  language,
  dayWeek,
  icon,
});
export default connect(mapStateToProps)(WeatherThreeDay);
