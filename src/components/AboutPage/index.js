import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AboutMainPage from "./AboutMainPage";
import AboutDefault from "./AboutDefault";

class About extends Component {
    constructor(props){
        super(props);
        this.aboutData = props.AboutData;
    }
    render() {
        if (this.props.MainPageAbout){
            return (
                <AboutMainPage AboutData={this.aboutData}/>
            )
        }
        return (
            <AboutDefault AboutData={this.aboutData}/>
        )
    }
}
About.propTypes = {
    MainPageAbout: PropTypes.bool,
    AboutData: PropTypes.object
};

export default About;