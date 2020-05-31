import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeFormatGrade } from '../../action/changeFormatGrade';
import { convertDegrees } from '../../action/convertDegrees';
import { convertFahrenheit, convertCelsius } from '../../utils';

export const ButtonGrade = (props) => {
  const {
    changeFormatGrade, formatTemperature, temperature, feelsLike, convertDegrees, windSpeed,
  } = props;
  const [changeCurrentCrade, setChangeCurrentGrade] = useState(false);
  const handleButtonFahrenheit = () => {
    localStorage.setItem('formatGrade', JSON.stringify('F'));
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    changeFormatGrade(formatGrade);
  };

  const handleButtonCelsius = () => {
    localStorage.setItem('formatGrade', JSON.stringify('C'));
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    changeFormatGrade(formatGrade);
    setChangeCurrentGrade(true);
  };

  useEffect(() => {
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    if (formatGrade === 'F' && temperature) {
      const temperatureF = convertFahrenheit(temperature.curentTemperature);
      const temperatureSecondDayF = convertFahrenheit(temperature.temperatureSecondDay);
      const feelLikesF = convertFahrenheit(feelsLike);
      const temperatureThirdDayF = convertFahrenheit(temperature.temperatureThirdDay);
      convertDegrees(temperatureF, feelLikesF, temperatureSecondDayF, temperatureThirdDayF);
    }
    if (formatGrade === 'C' && temperature && changeCurrentCrade) {
      const temperatureC = convertCelsius(temperature.curentTemperature);
      const temperatureSecondDayC = convertCelsius(temperature.temperatureSecondDay);
      const feelLikesC = convertCelsius(feelsLike);
      const temperatureThirdDayC = convertCelsius(temperature.temperatureThirdDay);
      convertDegrees(temperatureC, feelLikesC, temperatureSecondDayC, temperatureThirdDayC);
    }
  }, [formatTemperature, windSpeed]);

  return (
    <div className='buttons__grade'>
      <button
        className={formatTemperature === 'C' ? 'button button_active' : 'button'}
        onClick={handleButtonCelsius}
      >
        &#186;C
      </button>
      <button
        className={formatTemperature === 'F' ? 'button button_active' : 'button'}
        onClick={handleButtonFahrenheit}
      >
        &#186;F
        </button>
    </div>
  );
};
const mapStateToProps = ({
  formatTemperature, temperature, feelsLike, windSpeed,
}) => ({
  formatTemperature,
  temperature,
  feelsLike,
  windSpeed,
});
export default connect(mapStateToProps, { changeFormatGrade, convertDegrees })(ButtonGrade);
