import React from 'react';
import { Redirect } from 'react-router-dom';

import http from '../../config/http';
import { isLoggedIn } from '../../config/auth0';

const Home = () => {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />
  }

  http.get('/values').then(res => console.log(res));
  return <h1>Hai</h1>;
};

export default Home;
