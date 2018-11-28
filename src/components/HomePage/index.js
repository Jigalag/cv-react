import React, {Component} from 'react';
import Projects from "../ProjectsPage";
import About from "../AboutPage";
import PropTypes from "prop-types";
import MainHeader from "../MainHeader";

class Home extends Component {
    constructor(props){
        super(props);
        this.aboutData = props.AboutData;
    }
    render() {
        return (
            <div>
                <MainHeader/>
                <About AboutData={this.aboutData} MainPageAbout/>
                <Projects MainPageList/>
            </div>
        )
    }
}
Home.propTypes = {
    MainPageAbout: PropTypes.bool,
    AboutData: PropTypes.object
};
export default Home;