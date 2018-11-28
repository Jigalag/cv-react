import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Contact extends Component {
    constructor(props){
        super(props);
        this.contactData = props.contact;
    }
    render() {
        const contactItem = this.contactData.social_links.map((link, key) =>
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
                        <p>{ this.contactData.contact_text }</p>
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

export default connect(mapStateToProps)(Contact);