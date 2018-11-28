import React, {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
        this.userData = props['UserData'] || {};
    }

    render() {
        const Social = this.userData.social_links.map((link, key) => {
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
                                <img src={this.userData.avatar}
                                     alt={(this.userData.full_name + ' | ' + this.userData.position + ' | ' + this.userData.company)}
                                     title={(this.userData.full_name + ' | ' + this.userData.position + ' | ' + this.userData.company)} />
                            </div>
                            <div className="userTitle">
                                <div className="userName">
                                    { this.userData.full_name }
                                </div>
                                <div className="userPosition">
                                    { this.userData.position } | { this.userData.company } | { this.userData.location }
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
export default Footer;