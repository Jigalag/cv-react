import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AboutMainPage from "./AboutMainPage";
import AboutDefault from "./AboutDefault";
import connect from "react-redux/es/connect/connect";

class About extends Component {
    constructor(props){
        super(props);
        this.aboutData = props.userData;
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

function mapStateToProps (state) {
    return {
        userData: state.about
    }
}
export default connect(mapStateToProps)(About);