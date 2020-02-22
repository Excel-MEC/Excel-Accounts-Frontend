import * as auth0 from 'auth0-js';
// import Cookie from 'universal-cookie';

import configs from './auth_config';
import http from './http';

const config = configs();

const webAuth = new auth0.WebAuth({
  clientID: config.clientID,
  domain: config.domain,
  responseType: 'token id_token',
  redirectUri: `${window.location.origin}/login/callback`,
  scope: 'openid profile email'
});

export const login = () => {
  webAuth.authorize();
};

export const handleAuthentication = (hash: any, history: any) => {
  return webAuth.parseHash({ hash: hash }, async function(
    err: any,
    authResult: any
  ) {
    if (err) {
      console.log(err);
    }

    setSession(authResult, history);
  });
};

const setSession = (authResult: any, history: any) => {
  console.log(authResult.accessToken);
  return http
    .post('/auth/login', { auth_token: authResult.accessToken })
    .then(res => {
      localStorage.setItem('jwt_token', res.token);
      window.location.href = '/';
    });
};

export const handleLogout = (history: any) => {
  webAuth.logout({
    returnTo: window.location.origin
  });
};

export const isLoggedIn = () => {
  if (localStorage.getItem('jwt_token')) {
    return true;
  }
  return false;
};
