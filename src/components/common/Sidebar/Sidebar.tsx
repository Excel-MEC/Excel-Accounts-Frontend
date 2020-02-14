import React from 'react';
import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar" data-color="purple" data-background-color="black" data-image="./assets/img/sidebar-2.jpg">
    <div className="logo">
      <a href="/" className="simple-text logo-normal">
        Creative Tim
            </a>
    </div>
    <div className="sidebar-wrapper">
      <ul className="nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;