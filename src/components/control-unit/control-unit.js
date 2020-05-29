import React from 'react';
import ButtonBacground from './button-background';
import ButtonLanguage from './button-lang';
// eslint-disable-next-line import/no-named-as-default
import ButtonGrade from './button-grade';
import Search from './search';

// eslint-disable-next-line import/prefer-default-export
export const ControlUnit = () => (
    <div className='control__unit'>
      <div className='buttons__control'>
        <ButtonBacground />
        <ButtonLanguage />
        <ButtonGrade />
      </div>
      <Search />
    </div>
);
