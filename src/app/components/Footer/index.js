import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Footer extends Component {

    render() {
        const Social = this.props.userData.socialLinks && this.props.userData.socialLinks.map((link, key) => {
            return link.show && (
                <li key={key}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer"
                       dangerouslySetInnerHTML={{__html: link.ico}}>
                    </a>
                </li>
            )
        });
        return (

            <footer>
                <div className="container">
                    <div className="userData perHalf floatLeft">
                        <div className="userInfo">
                            <div className="userAvatar">
                                <img src={this.props.userData.avatar}
                                     alt={(this.props.userData.fullName + ' | ' + this.props.userData.position + ' | ' + this.props.userData.company)}
                                     title={(this.props.userData.fullName + ' | ' + this.props.userData.position + ' | ' + this.props.userData.company)} />
                            </div>
                            <div className="userTitle">
                                <div className="userName">
                                    { this.props.userData.fullName }
                                </div>
                                <div className="userPosition">
                                    { this.props.userData.position } | { this.props.userData.company } | { this.props.userData.address }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="socialLinks perHalf floatLeft">
                        <div className="userLinks">
                            <ul>
                                {Social}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
Footer.propTypes = {
    UserData: PropTypes.object
};

function mapStateToProps (state) {
    return {
        userData: state.about
    }
}
export default connect(mapStateToProps)(Footer);