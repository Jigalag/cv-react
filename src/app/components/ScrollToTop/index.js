import {Component} from 'react';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            this.props.closeNav();
        }
    }

    render() {
        return this.props.children;
    }
}

function mapDispatchToProps (dispatch) {
    return {
        closeNav: () => {
            dispatch({type: "CLOSE_NAV"})
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ScrollToTop));