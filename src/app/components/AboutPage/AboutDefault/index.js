import React from 'react';
import PropTypes from 'prop-types';

function AboutDefault(props) {
    const aboutInfo = props.AboutData;
    const Skills = aboutInfo.skills.map((skill, key) =>
        <li className="skill" key={key}>
            <span>{skill.title}</span>
            <span className={'fill fill_'+skill.level}>
                <span>{skill.level} / 10</span>
            </span>
        </li>
    );
    const Languages = aboutInfo.languages.map((lang, key) =>
        <li className="skill" key={key}>
            <span>{lang.title}</span>
            <span className={'fill fill_'+lang.level}>
                <span>{lang.level} / 10</span>
            </span>
        </li>
    );
    return (
        <div className="container smallContainer">
            <div className="simpleText textLeft">
                <div dangerouslySetInnerHTML={{__html: aboutInfo.aboutPage}}>
                </div>
                <h3>My professional skills:</h3>
                <ul className="skills">
                    {Skills}
                </ul>
                <h3>Education:</h3>
                <p>{aboutInfo.education}</p>
                <h3>My language skills:</h3>
                <ul className="skills">
                    {Languages}
                </ul>
            </div>
        </div>
    )
}
AboutDefault.propTypes = {
    AboutData: PropTypes.object
};

export default AboutDefault;