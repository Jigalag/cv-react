import React from 'react';
import PropTypes from 'prop-types';
import ListLevel from "../../ListLevel";

function AboutDefault(props) {
    const aboutInfo = props.AboutData;
    return (
        <div className="container smallContainer">
            <div className="simpleText textLeft">
                <h3>{aboutInfo['aboutTitle']}</h3>
                <div dangerouslySetInnerHTML={{__html: aboutInfo['aboutPage']}}>
                </div>
                <h3>My professional skills:</h3>
                <ListLevel List={aboutInfo.skills}/>
                <h3>Education:</h3>
                <p>{aboutInfo['education']}</p>
                <h3>My language skills:</h3>
                <ListLevel List={aboutInfo.languages}/>
            </div>
        </div>
    )
}
AboutDefault.propTypes = {
    AboutData: PropTypes.object
};

export default AboutDefault;