import React, {Component} from 'react';
import Projects from "../ProjectsPage";
import About from "../AboutPage";
import PropTypes from "prop-types";
import MainHeader from "../MainHeader";

class Home extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <About MainPageAbout/>
                <Projects MainPageList/>
            </div>
        )
    }
}
Home.propTypes = {
    MainPageAbout: PropTypes.bool
};
export default Home;