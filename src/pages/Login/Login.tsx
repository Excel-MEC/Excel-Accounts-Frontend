import React from 'react';
import { Route } from 'react-router-dom';
import { login } from '../../config/auth0';
import Callback from './Callback';

const LoginButton = () => (
  <div>
    <h1>Login</h1>
    <button onClick={login}>Login</button>
  </div>
);

const Login = (props: any) => {
  const { match } = props;
  return (
    <div className="login">
      <Route exact path={`${match.url}/`} component={LoginButton} />
      <Route path={`${match.url}/callback/`} component={Callback} />
    </div>
  );
};
export default Login;
