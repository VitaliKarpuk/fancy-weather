import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeFormatGrade } from '../../action/changeFormatGrade';
import { convertDegrees } from '../../action/convertDegrees';
import { gradeCalculation } from '../../utils';

export const ButtonGrade = (props) => {
  const {
    changeFormatGrade, formatTemperature, temperature, feelsLike, convertDegrees, windSpeed,
  } = props;

  const handleButtonFahrenheit = () => {
    localStorage.setItem('formatGrade', JSON.stringify('F'));
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    changeFormatGrade(formatGrade);
  };

  const handleButtonCelsius = () => {
    localStorage.setItem('formatGrade', JSON.stringify('C'));
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    changeFormatGrade(formatGrade);
    const temperatureC = gradeCalculation(temperature.curentTemperature, formatGrade);
    const temperatureSecondDayC = gradeCalculation(temperature.temperatureSecondDay, formatGrade);
    const feelLikesC = gradeCalculation(feelsLike, formatGrade);
    const temperatureThirdDayC = gradeCalculation(temperature.temperatureThirdDay, formatGrade);
    convertDegrees(temperatureC, feelLikesC, temperatureSecondDayC, temperatureThirdDayC);
  };

  useEffect(() => {
    const formatGrade = JSON.parse(localStorage.getItem('formatGrade'));
    if (formatGrade === 'F' && temperature) {
      const temperatureF = gradeCalculation(temperature.curentTemperature, formatGrade);
      const temperatureSecondDayF = gradeCalculation(temperature.temperatureSecondDay, formatGrade);
      const feelLikesF = gradeCalculation(feelsLike, formatGrade);
      const temperatureThirdDayF = gradeCalculation(temperature.temperatureThirdDay, formatGrade);
      convertDegrees(temperatureF, feelLikesF, temperatureSecondDayF, temperatureThirdDayF);
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
