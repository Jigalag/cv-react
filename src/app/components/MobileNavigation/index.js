import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

class MobileNavigation extends Component {
    render() {
        return (
            <div className={this.props.nav.isOpen ? "navBurger active" : "navBurger"}
                 onClick={this.props.toggleNav}>
                <span>
                </span>
            </div>
        )
    }
}
MobileNavigation.propTypes = {
    IsOpen: PropTypes.bool,
    ClickFunc: PropTypes.func,
};
function mapStateToProps (state) {
    return {
        nav: state.nav
    }
}
function mapDispatchToProps (dispatch) {
    return {
        toggleNav: () => {
            dispatch({type: "TOGGLE_NAV"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);