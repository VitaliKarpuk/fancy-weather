import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { KEY_TRANSLATE } from '../../constants/constants';

const WeatherThreeDay = ({ weather, language, dayWeek }) => {
  const [day, setDay] = useState([]);
  const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  useEffect(() => {
    if (weather && language) {
      let firstDay = daysWeek[dayWeek - 1] || daysWeek[new Date().getDay() - 1];
      let secondDay = daysWeek[dayWeek] || daysWeek[new Date().getDay()];
      let thirdDay = daysWeek[dayWeek + 1] || daysWeek[new Date().getDay() + 1];
      if (dayWeek === 6 || !thirdDay) {
        thirdDay = daysWeek[0];
      }
      if (dayWeek === 7 || !secondDay) {
        secondDay = daysWeek[0];
        thirdDay = daysWeek[1];
      }
      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=${language}&text=${firstDay},${secondDay},${thirdDay}}`)
        .then((response) => response.json())
        .then((data) => {
          const first = data.text[0].split(',')[0];
          const second = data.text[0].split(',')[1];
          const third = data.text[0].split(',')[2].slice(0, data.text[0].split(',')[2].length - 1);
          setDay([first, second, third]);
        });
    }
  }, [language, dayWeek]);
  return (
    <div className='weather-three-day'>
      <div>
        <span>{day[0]}</span>
        <span>{Math.ceil(weather.curentTemperature)}°</span>
      </div>
      <div>
        <span>{day[1]}</span>
        <span>{Math.ceil(weather.temperatureSecondDay)}°</span>
      </div>
      <div>
        <span>{day[2]}</span>
        <span>{Math.ceil(weather.temperatureThirdDay)}°</span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ language, dayWeek }) => ({
  language,
  dayWeek,
});
export default connect(mapStateToProps)(WeatherThreeDay);
