import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { handleAuthentication } from '../../config/auth0';

const Callback = (props: any) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    handleAuthentication(props.location.hash, props.history).then(res => {
      setLogin(true);
    });
  }, []);
  if(login)
  return <Redirect to="/" />;
  return <h1>Logging in</h1>;
};

export default Callback;
