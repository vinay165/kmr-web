import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './index.scss';

const Login = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminName = (val) => {
    setAdminName(val);
  } 
  const handlePassword = (val) => {
    setPassword(val);
  } 

  const handleSubmit = () => {
    console.log(adminName, password)
    if(adminName === 'admin' && password === 'admin' ){
      console.log('success');
    }
  }
  
  return (
    <div className="login">
      <span>Admin Name</span>
      <Input
        handleChange={handleAdminName} />
      <span>Password</span>
      <Input 
        handleChange={handlePassword} />
      <Button 
        value="Log In"
        isDisabled={adminName === '' || password === ''}
        handleClick={handleSubmit} />
    </div>
  )
}

export default Login;