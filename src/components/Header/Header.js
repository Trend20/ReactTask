import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Logo from '../../assets/img/brotherhood-global-foundation1.png';
 
class Header extends Component {
    render() { 
        return (
            <div className="header">
                <header>
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <div className="navigation">
                        <Router>
                            <div>
                                <nav>
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
                    </div>
                </header>
            </div>
        );
    }
}
 
export default Header;