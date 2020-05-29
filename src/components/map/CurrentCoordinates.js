import React from 'react';
import { connect } from 'react-redux';
import { Geolocation } from './geolocation';

const CurrentCoordinates = (props) => {
  const { longitude, latitude, language } = props;
  const conversionToMin = (value) => {
    if (value) {
      const degree = value.toString().split('');
      degree.splice(0, degree.indexOf('.'), '0');
      return +degree.join('') * 60;
    }
  };
  const conversionToSec = (value) => {
    if (value) {
      const degree = value.toString().split('');
      degree.splice(0, degree.indexOf('.'), '0');
      return +degree.join('') * 60;
    }
  };
  const degreeLatitude = `${Math.trunc(latitude)}° ${Math.trunc(conversionToMin(latitude))}" ${Math.trunc(conversionToSec(conversionToMin(latitude)))}'`;
  const degreeLongitude = `${Math.trunc(longitude)}° ${Math.trunc(conversionToMin(longitude))}" ${Math.trunc(conversionToSec(conversionToMin(longitude)))}'`;

  return (
    <div className='coordinates'>
      <Geolocation longitude={longitude} latitude={latitude} />
  <div><span>{language === 'en' ? 'Longitude' : (language === 'ru' ? 'Долгота' : 'Даўгата')}: {degreeLongitude}</span></div>
      <div><span>{language === 'en' ? 'Latitude' : (language === 'ru' ? 'Широта' : 'Шырата')}: {degreeLatitude}</span></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { longitude, latitude, language } = state;
  return {
    longitude,
    latitude,
    language,
  };
};
export default connect(mapStateToProps)(CurrentCoordinates);
