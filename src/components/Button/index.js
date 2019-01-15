import React from 'react';
import './index.scss';

const themes = {
  'button-primary': 'button__primary',
  'button-secondary': 'button__secondary',
  'button-primary-large': 'button__primary button__primary--large',
  'button-secondary-large': 'button__secondary button__secondary--large',
  'button-positive': 'button__positive',
  'button-negative': 'button__negative',
}
const Button = ({children, label, handleClick, customClass, isDisabled}) => {

  return (
    <button 
      className={`button ${themes[customClass]}`}
      disabled={isDisabled}
      onClick={handleClick} >
      {children || label}
    </button>
  )
}

Button.defaultProps = {
  customClass: 'button-primary'
}

export default Button;