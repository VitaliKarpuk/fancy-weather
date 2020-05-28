import React from 'react';
import ButtonBacground from './button-background';
import ButtonLanguage from './button-lang';
import ButtonGrade from './button-grade';
import Search from './search';

export const ControlUnit = () => {
  return(
    <div className='control__unit'>
      <div className='buttons__control'>
        <ButtonBacground />
        <ButtonLanguage />
        <ButtonGrade />
      </div>
      <Search />
    </div>
  )
}