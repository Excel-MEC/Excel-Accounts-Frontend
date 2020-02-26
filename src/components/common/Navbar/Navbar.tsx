import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
    <div className="container-fluid">
      <div className="navbar-wrapper">
        <a className="navbar-brand" href="/">Dashboard</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon icon-bar"></span>
        <span className="navbar-toggler-icon icon-bar"></span>
        <span className="navbar-toggler-icon icon-bar"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
              <i className="fa fa-user-circle"></i>
                <p className="d-inline">Username</p>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/logout">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Navbar;