import React from 'react';
import { isLoggedIn } from '../../../config/auth0';
import { Redirect } from 'react-router-dom';

interface IProps {
  children: any
}

const PrivateRoute = ({children}:IProps) => {
  if (isLoggedIn()) {
    return children;
  }
  return <Redirect to="/login" />;
}

export default PrivateRoute;