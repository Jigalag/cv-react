import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { getContacts } from "../../redux/actions/contact";

class Contact extends Component {
    componentDidMount() {
        this.props.contact && this.props.getMyContact();
    }
    render() {
        const contactItem = this.props.contact.socialLinks.map((link, key) =>
            <li className="skill" key={key}>
                <a href={link.url}>
                    <span dangerouslySetInnerHTML={{__html: link.ico}}>
                    </span>
                    {link.title}
                </a>
            </li>
        );
        return (
            <div>
                <div className="container smallContainer">
                    <div className="simpleText textCenter contactPage">
                        <h2>Contacts</h2>
                        <p>{ this.props.contact.contactText }</p>
                    </div>
                </div>
                <div className="purpleSection">
                    <div className="container">
                        <div className="workItem contactItem">
                            <div className="simpleText textLeft floatLeft fullWidth">
                                <ul className="contactsList">
                                    {contactItem}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        contact: state.contact
    }
}
function mapDispatchToProps (dispatch) {
    return {
        getMyContact: () => {
            dispatch(getContacts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);