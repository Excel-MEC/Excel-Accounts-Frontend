import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Login from './pages/Login/Login';
import Base from './pages/Base';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Base} />
      </Switch>
    </Router>
  )
};

export default App;
