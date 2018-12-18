import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

function AboutMainPage(props) {
    const aboutData = props.AboutData;
    return (
        <div className="simpleText textCenter redBackground">
            <h2>About me</h2>
            <div className="container textLeft">
                <div dangerouslySetInnerHTML={{__html: aboutData.aboutText}}>
                </div>
            </div>
            <NavLink to="/about/" href="" className="button whiteButton viewMoreButton">View More</NavLink>
        </div>
    )
}
AboutMainPage.propTypes = {
    AboutData: PropTypes.object
};

export default AboutMainPage;