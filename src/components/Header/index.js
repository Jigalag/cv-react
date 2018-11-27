import React, {Component} from 'react';
import {  NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <NavLink href="#" className="headerLogo" exact to={'/cv-react/'}>
                        <img src="/cv-react/img/logo.png"
                             alt="Alex.V - Front-End Developer"
                             title="Alex.V - Front-End Developer" />
                    </NavLink>
                    {/*<MobileNavigation navigation=".headerNavigation" />*/}
                    <nav className="headerNavigation">
                        <ul>
                            <li>
                                <NavLink href="#" exact to={'/cv-react/'}
                                      activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/cv-react/about'}
                                      activeClassName="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/cv-react/projects'}
                                      activeClassName="active"
                                      className="{'active': currentState == 'Project'}">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/cv-react/work'}
                                      activeClassName="active">Work experience</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/react-cv/contact'}
                                      activeClassName="active">Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;