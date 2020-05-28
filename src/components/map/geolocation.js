import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

export const Geolocation = (props) => {

  const { longitude, latitude } = props;
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoia2FycHVrdml0YWxpIiwiYSI6ImNrYWN2cmtzaDBxaXoyem84aHZpYmVzdTIifQ.3UGLHw-Xj15Q1iEjhUVlWQ'
  });
  return (
    <>
      <Map
        style='mapbox://styles/mapbox/streets-v9'
        center={[longitude, latitude]}
        zoom={[9.5]}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }} >
          <Feature coordinates={[longitude, latitude]} />
        </Layer>
      </Map>
    </>
  )
}
