import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../../assets/img/brotherhood-global-foundation.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                   <ul className="nav">
                       <li className="nav-link">
                           <a href="#" className="nav-item">Home</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">About</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">Blogs</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">Contacts</a>
                       </li>
                   </ul>
                </nav>
            </div>
        </header>
      </div>
    );
  }
}
