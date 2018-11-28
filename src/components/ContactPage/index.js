import React, {Component} from 'react';
import contactData from '../../data/contact'

class Contact extends Component {
    render() {
        const contactItem = contactData.social_links.map(link =>
            <li className="skill">
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
                        <p>{ contactData.contact_text }</p>
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
export default Contact;