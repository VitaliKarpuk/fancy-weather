import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../action/get-location';
import { KEY_TRANSLATE } from '../../constants/constants';
import { getWeatherPassphrase } from '../../action/getWeatherPassphrase';
import { getVolumeSpeak } from '../../utils';
import { changeVolumeSpeak } from '../../action/changeVolumeSpeak';

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
const Search = ({
  getLocation, language, getWeatherPassphrase, changeVolumeSpeak,
}) => {
  const [value, setValue] = useState('');
  const [valueTranslate, setValueTranslate] = useState('');
  const [error, setError] = useState('');
  const [voice, setVoice] = useState(false);


  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=en&text=${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.code > 400) {
          if (language === 'en') {
            setError('Please enter a valid request.');
          } else if (language === 'ru') {
            setError('Пожалуйста, введите правильный запрос.');
          } else if (language === 'be') {
            setError('Калі ласка, увядзіце сапраўдны запыт.');
          }
        } else {
          setValueTranslate(data.text[0]);
        }
      });
  };

  const handleVoice = () => {
    setVoice((prev) => !prev);
  };

  useEffect(() => {
    if (voice === true) {
      recognition.lang = `${language}`;
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = (e) => {
        fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=en&text=${e.results[0][0].transcript}`)
          .then((response) => response.json())
          .then((data) => {
            setValueTranslate(data.text[0]);
            setValue(e.results[0][0].transcript);
            getWeatherPassphrase(e.results[0][0].transcript);
            changeVolumeSpeak(getVolumeSpeak(e.results[0][0].transcript));
            recognition.stop();
          });
      };
    } else {
      recognition.stop();
    }
    recognition.onend = () => setVoice(false);
  }, [voice]);

  const handleCloseError = () => {
    setError('');
  };
  useEffect(() => {
    if (value !== '' && value.length > 2 && value !== 'weather forecast' && value !== 'прогноз погоды' && value !== "прагноз надвор'я" && value !== 'louder'
      && value !== 'quieter' && value !== 'тише' && value !== 'цішэй' && value !== 'громче' && value !== 'гучней' && valueTranslate) {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${valueTranslate}&days=3$lang=${language}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            if (language === 'en') {
              setError('Location not found.');
            } else if (language === 'ru') {
              setError('Местоположение не найдено.');
            } else if (language === 'be') {
              setError('Месцазнаходжанне не знойдзена.');
            }
          } else {
            const longitude = data.location.lon;
            const latitude = data.location.lat;
            getLocation(longitude, latitude);
          }
        });
    }
  }, [value, valueTranslate]);

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input className="search-input" type="text" value={value} placeholder="Search movie" onChange={changeValue} />
        <div onClick={handleVoice} className={voice && 'voice_active'}>
          <i className="fas fa-microphone fa-2x"></i>
        </div>
        <button className="search-btn" type="submit">{language === 'en' ? 'SEARCH' : (language === 'ru') ? 'ПОИСК' : 'ПОШУК'}</button>
      </form>
      <div className={(error) ? 'window__errors window__errors_active' : 'window__errors'}>
        <span onClick={handleCloseError}><i className="fas fa-times-circle"></i></span>
        {error}
      </div>
    </>
  );
};
const mapStateToProps = ({ language, tz }) => ({
  language,
  tz,
});
export default connect(mapStateToProps, { getLocation, getWeatherPassphrase, changeVolumeSpeak })(Search);
