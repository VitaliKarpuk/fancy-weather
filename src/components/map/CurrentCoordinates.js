import React from 'react';
import { connect } from 'react-redux';
import { Geolocation } from './geolocation';
import { conversionToMin, conversionToSec, getDegreeMinAndSec } from '../../utils';

const CurrentCoordinates = (props) => {
  const { longitude, latitude, language } = props;
  const degreeMinLat = conversionToMin(latitude);
  const degreeSecLat = conversionToSec(conversionToMin(latitude));
  const degreeMinLong = conversionToMin(longitude);
  const degreeSecLong = conversionToSec(conversionToMin(longitude));
  const degreeLatitude = getDegreeMinAndSec(latitude, degreeMinLat, degreeSecLat);
  const degreeLongitude = getDegreeMinAndSec(longitude, degreeMinLong, degreeSecLong);
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
