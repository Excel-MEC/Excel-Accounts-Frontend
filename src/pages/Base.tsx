import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar/Sidebar';
import Navbar from '../components/common/Navbar/Navbar';

import Home from './Home/Home';
import Logout from './Logout/Logout';
import Authorize from './Authorize/Authorize';
import Callback from './Login/Callback';

const Base = () => (
  <div className="App">
    <div className="wrapper ">
      <Sidebar />
      <div className="main-panel">
        <Navbar />
        <div className="content">
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/logout" component={Logout} />
              <Route path="/authorize" component={Authorize} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Base;