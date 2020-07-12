import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../../assets/img/brotherhood-global-foundation.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="header mt-0">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark">
                   <ul className="nav">
                       <li className="nav-link">
                           <a href="#" className="nav-item">HOME</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">ABOUT</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">HOW WE WORK</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">BLOGS</a>
                       </li>
                       <li className="nav-link">
                           <a href="#" className="nav-item">CONTACT</a>
                       </li>
                   </ul>
                </nav>
            </div>
        </header>
      </div>
    );
  }
}
