import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { KEY_API_BACKGROUND } from '../../constants/constants';
import { changeBackground } from '../../action/changeBackground';
import { chooseOrientation } from '../../utils';

const ButtonBacground = (props) => {
  const { changeBackground, weatherCode } = props;
  const [background, setBackground] = useState();
  const [animation, setAnimation] = useState(false);
  const arrMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const orientation = chooseOrientation(window.innerWidth, window.innerHeight);
  const handleReafreshBackground = () => {
    setBackground(!background);
  };
  useEffect(() => {
    if (weatherCode || background) {
      fetch(`https://api.unsplash.com/photos/random?orientation=${orientation}&per_page=1&query=nuture,${weatherCode.toLowerCase()},${arrMonth[new Date().getMonth()]},${new Date().getHours()}&client_id=${KEY_API_BACKGROUND}`)
        .then((response) => response.json())
        .then((data) => {
          setAnimation(true);
          console.log(weatherCode.toLowerCase(), arrMonth[new Date().getMonth()], new Date().getHours());
          const root = document.querySelector('#root');
          root.style.backgroundImage = `url(${data.urls.small})`;
          setTimeout(() => setAnimation(false), 1000);
        });
    }
  }, [background]);

  return (
    <>
      <button className={animation ? 'button button__background button_active' : 'button button__background'} onClick={handleReafreshBackground}><span className={animation && 'animatiom'}
      ><i className="fas fa-sync-alt fa-2x"></i></span></button>
    </>
  );
};
const mapStateToProps = (state) => {
  const { urlImg, weatherCode } = state;
  return {
    urlImg,
    weatherCode,
  };
};
export default connect(mapStateToProps, { changeBackground })(ButtonBacground);
