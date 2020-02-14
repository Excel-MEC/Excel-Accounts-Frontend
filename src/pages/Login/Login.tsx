import React from 'react';
import { Route } from 'react-router-dom';
import './Login.scss';

import { login } from '../../config/auth0';
import Callback from './Callback';

const LoginButton = () => (
    <button onClick={login} className="btn btn-lg btn-primary">Login</button>
);

const Login = (props: any) => {
  const { match } = props;
  return (
    <div className="loginPage">
      <Route exact path={`${match.url}/`} component={LoginButton} />
      <Route path={`${match.url}/callback/`} component={Callback} />
    </div>
  );
};
export default Login;
