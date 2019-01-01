import React from 'react';
import './index.scss';

const Button = ({value, handleClick, customClass, isDisabled}) => {

  return (
    <button 
      className={`button ${customClass}`}
      disabled={isDisabled}
      onClick={handleClick} >
      {value}
    </button>
  )
}

export default Button;