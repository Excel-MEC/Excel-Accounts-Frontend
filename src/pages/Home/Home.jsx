import React, {useEffect} from 'react';

import http from '../../config/http';

const Home = () => {
  useEffect(() => {
    http.get('/values').then(res => console.log(res));
  });
  return <h1>Hai</h1>;
};

export default Home;
