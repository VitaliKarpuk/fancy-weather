import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../action/changeLanguage';

const ButtonLanguage = ({
  language, changeLanguage,
}) => {
  const handleButtonEng = () => {
    localStorage.setItem('Lang', 'en');
    changeLanguage('en');
  };
  const handleButtonRu = () => {
    localStorage.setItem('Lang', 'ru');
    changeLanguage('ru');
  };
  const handleButtonBe = () => {
    localStorage.setItem('Lang', 'be');
    changeLanguage('be');
  };
  return (
    <div className='buttons__language'>
      <button className={language === 'en' ? 'button button_active' : 'button'} onClick={handleButtonEng}>EN</button>
      <button className={language === 'ru' ? 'button button_active' : 'button'} onClick={handleButtonRu}>RU</button>
      <button className={language === 'be' ? 'button button_active' : 'button'} onClick={handleButtonBe}>BE</button>
    </div>

  );
};
const mapStateToProps = ({ language }) => ({
  language,
});
export default connect(mapStateToProps, { changeLanguage })(ButtonLanguage);
