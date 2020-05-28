import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../action/get-location';
import { KEY_TRANSLATE } from '../../constants/constants';

const Search = ({ getLocation, language, tz }) => {
  const [value, setValue] = useState('');
  const [valueTranslate, setValueTranslate] = useState('');
  const [error, setError] = useState('');
  const [request, setRequest] = useState(false);
  const [voice, setVoice] = useState(false);

  


  const changeValue = (event) => {
    setValue(event.target.value);
    setRequest(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('')
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${value}&days=3&lang=${language}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          if (language === 'en') {
            setError('Please enter a valid request.')
          } else if (language === 'ru') {
            setError('Пожалуйста, введите правильный запрос.')
          } else if (language === 'be') {
            setError('Калі ласка, увядзіце сапраўдны запыт.')
          }

        } else {
          const longitude = data.location.lon;
          const latitude = data.location.lat;
          const tz = data.location.tz_id;
          getLocation(longitude, latitude, tz)
        }

      })
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const handleVoice = () => {
    recognition.lang = `${language}`
    recognition.onresult = (e) => {
      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY_TRANSLATE}&lang=en&text=${e.results[0][0].transcript}}`)
        .then((response) => response.json())
        .then((data) => {
          setValueTranslate(data.text[0].slice(0, data.text[0].length - 1))
          setValue(e.results[0][0].transcript);
          setVoice(false)
        })
      setRequest(true)
    }
    if (voice) {
      setVoice(false);
      recognition.stop()
    }
    if (!voice) {
      recognition.start();
      setVoice(true)
      setTimeout(() => setVoice(false), 6000)
    }
  }
  const handleCloseError = () => {
    setError('');
  }
  useEffect(() => {
    if (value !== '' && value.length > 2 && request) {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${valueTranslate}&days=3$lang=${language}`)
        .then((response) => response.json())
        .then((data) => {
          const longitude = data.location.lon;
          const latitude = data.location.lat;
          getLocation(longitude, latitude)
        }
        )
    }
  }, [value, request])

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
  )
}
const mapStateToProps = ({ language, tz }) => {
  return {
    language,
    tz
  }
}
export default connect(mapStateToProps, { getLocation })(Search)