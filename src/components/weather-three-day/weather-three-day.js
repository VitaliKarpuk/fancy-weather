import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { KEY_TRANSLATE } from '../../constants/constants';

const WeatherThreeDay = ({ weather, language }) => {
  const [dayWeek, setDayWeek] = useState([]);
  const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'];
  useEffect(() => {
    if (weather && language) {
      const firstDay = daysWeek[new Date().getDay() - 1];
      const secondDay = daysWeek[new Date().getDay()];
      const thirdDay = daysWeek[new Date().getDay() + 1];

      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=${language}&text=${firstDay},${secondDay},${thirdDay}}`)
        .then((response) => response.json())
        .then((data) => {
          const first = data.text[0].split(',')[0];
          const second = data.text[0].split(',')[1];
          const third = data.text[0].split(',')[2].slice(0, data.text[0].split(',')[2].length - 1);
          setDayWeek([first, second, third]);
        });
    }
  }, [language]);
  return (
    <div className='weather-three-day'>
      <div>
        <span>{dayWeek[0]}</span>
        <span>{Math.ceil(weather.curentTemperature)}°</span>
      </div>
      <div>
        <span>{dayWeek[1]}</span>
        <span>{Math.ceil(weather.temperatureSecondDay)}°</span>
      </div>
      <div>
        <span>{dayWeek[2]}</span>
        <span>{Math.ceil(weather.temperatureThirdDay)}°</span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ language }) => ({
  language,
});
export default connect(mapStateToProps)(WeatherThreeDay);
