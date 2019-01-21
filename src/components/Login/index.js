import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import auth from '../../services/auth';
import './index.scss';

const Login = (props) => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleAdminName = (val) => {
    setAdminName(val);
  } 
  const handlePassword = (val) => {
    setPassword(val);
  } 

  const handleSubmit = () => {
    // Make Login Service call
    if(adminName === 'admin' && password === 'admin' ){
      setRedirectToReferrer(true);
      auth.authenticate() // On Successfull Login
    }
  }
  
  const { from } =  props.location && props.location.state || { from: { pathname: "/" }};
  if(redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <div className="login">
      <span>Admin Name</span>
      <Input
        handleChange={handleAdminName} />
      <span>Password</span>
      <Input 
        type="password"
        handleChange={handlePassword} />
      <Button 
        label="Log In"
        customClass="button-primary-large"
        className="login__cta"
        isDisabled={adminName === '' || password === ''}
        handleClick={handleSubmit} />
    </div>
  )
}

export default withRouter(Login);