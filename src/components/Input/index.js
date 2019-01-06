import React, { useState } from 'react';
import './index.scss';

const Input = ({value: initialValue, handleChange, customClass}) => {
  const [value, setValue] = useState('');
  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
    handleChange(value);
  }
  return (
    <input 
    value={initialValue || value}
    className={`input ${customClass}`}
    onChange={handleValueChange} />
  )
}

export default Input;