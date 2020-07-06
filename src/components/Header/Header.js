import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Logo from '../../assets/img/brotherhood-global-foundation1.png';
import './Header.css';
 
class Header extends Component {
    render() { 
        return (
            <div className="heading">
                <header>
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    {/* <div className="navigation">
                        <Router>
                            <div>
                                <nav className="main-navbar">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Switch>
                                    <Route path="/about">
                                        About
                                    </Route>
                                    <Route path="/blogs">
                                        Blogs
                                    </Route>
                                    <Route path="/contact">
                                        Contact
                                    </Route>
                                    <Route path="/">
                                        Home
                                    </Route>
                                    
                                </Switch>
                            </div>
                        </Router>
                    </div> */}
                    <div className="links">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blogs</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
 
export default Header;