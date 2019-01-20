import React, { useState } from 'react';
import cn from 'classnames';
import './index.scss';

const Input = ({value: initialValue, handleChange, customClass, ...rest}) => {
  const [value, setValue] = useState('');
  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
    handleChange(value);
  }
  return (
    <input 
      {...rest}
      value={initialValue || value}
      className={cn('input', customClass)}
      onChange={handleValueChange} />
  )
}

export default Input;