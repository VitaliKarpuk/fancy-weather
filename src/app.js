import React from 'react';
import { ControlUnit } from './components/control-unit/control-unit';
import WeatherToday from './components/weather-today/weather-today';
import CurrentCoordinates from './components/map/CurrentCoordinates';
import Ticker from './components/ticker/ticker';

// eslint-disable-next-line import/prefer-default-export
export const App = () => (
    <>
    <div className='wrapper'>
      <ControlUnit />
      <div className='content'>
        <WeatherToday />
        <CurrentCoordinates />
      </div>
    </div>
    <Ticker />
    </>
);
