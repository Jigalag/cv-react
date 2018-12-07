import React, {Component} from 'react';
import {  NavLink } from "react-router-dom";
import MobileNavigation from "../MobileNavigation"
import connect from "react-redux/es/connect/connect";

class Header extends Component {

    render() {
        return (
            <header>
                <div className="container">
                    <NavLink href="#" className="headerLogo" exact to={'/'}>
                        <img src="/images/logo.png"
                             alt="Alex.V - Front-End Developer"
                             title="Alex.V - Front-End Developer" />
                    </NavLink>
                    <MobileNavigation/>
                    <nav className={this.props.nav.isOpen ? "headerNavigation active" : "headerNavigation"}>
                        <ul>
                            <li>
                                <NavLink href="#" exact to={'/'}
                                      activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/about'}
                                      activeClassName="active">About</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/projects'}
                                      activeClassName="active"
                                      className="{'active': currentState == 'Project'}">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/work'}
                                      activeClassName="active">Work experience</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" to={'/contact'}
                                      activeClassName="active">Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
function mapStateToProps (state) {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(Header);