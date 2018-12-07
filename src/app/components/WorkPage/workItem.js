import React from 'react';
import PropTypes from 'prop-types';

function WorkItem(props) {
    const company = props.company;
    const technologies = company.technologies.map((tech, key) =>
        <span key={key}>{tech}</span>
    );
    const webSite = company.web_site && (
        <li className="skill">
            <span>Website</span>
            <span>
                <a href={company.web_site} target="_blank" rel="noopener noreferrer">
                    {company.web_site}
                </a>
            </span>
        </li>
    );
    const startDate = company.start_date && (
        <li className="skill">
            <span>Worked</span>
            <span>{company.start_date} - {company.end_date ? company.end_date : 'Now'}</span>
        </li>
    );
    return (
        <div className="workItem">
            <div className="simpleText textLeft floatLeft fullWidth">
                <h2>{company.title}</h2>
                <p>{company.about}</p>
                <ul className="skills fullWidth blackList">
                    <li className="skill">
                        <span>Position</span> <span>{company.position}</span>
                    </li>
                    <li className="skill">
                        <span>Responsibilities</span> <span>{company.responsibilities}</span>
                    </li>
                    <li className="skill">
                        <span>Technologies</span>
                        {technologies}
                    </li>
                    {startDate}
                    {webSite}
                </ul>
            </div>
        </div>
    )
}
WorkItem.propTypes = {
    company: PropTypes.object
};

export default WorkItem;