import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <div className="container">
                    <a href="" className="headerLogo">
                        <img src="app/assets/img/logo.png"
                             alt="Alex.V - Front-End Developer"
                             title="Alex.V - Front-End Developer" />
                    </a>
                    <MobileNavigation navigation=".headerNavigation" />
                    <nav className="headerNavigation">
                        <ul>
                            <li>
                                <a href=""
                                   ui-sref="Home()"
                                   ui-sref-active="active">Home</a>
                            </li>
                            <li>
                                <a href=""
                                   ui-sref="About()"
                                   ui-sref-active="active">About</a>
                            </li>
                            <li>
                                <a href=""
                                   ui-sref="ProjectsList()"
                                   ng-class="{'active': currentState == 'Project'}"
                                   ui-sref-active="active">Projects</a>
                            </li>
                            <li>
                                <a href=""
                                   ui-sref="Works()"
                                   ui-sref-active="active">Work experience</a>
                            </li>
                            <li>
                                <a href=""
                                   ui-sref="Contacts()"
                                   ui-sref-active="active">Contacts</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;