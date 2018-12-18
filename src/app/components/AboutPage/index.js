import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AboutMainPage from "./AboutMainPage";
import AboutDefault from "./AboutDefault";
import connect from "react-redux/es/connect/connect";
import {getUserData} from "../../redux/actions/about";

class About extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.MainPageAbout){
            return (
                <AboutMainPage AboutData={this.props.userData}/>
            )
        }
        return (
            <AboutDefault AboutData={this.props.userData}/>
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
function mapDispatchToProps (dispatch) {
    return {
        getData: () => dispatch(getUserData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);