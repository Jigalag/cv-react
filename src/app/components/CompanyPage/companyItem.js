import React from 'react';
import PropTypes from 'prop-types';

function CompanyItem(props) {
    const company = props.company;
    const technologies = company.technologies.map((tech, key) =>
        <span key={key}>{tech}{key < (company.technologies.length - 1) ? ',' : ''}</span>
    );
    const webSite = company['webSite'] && (
        <li className="skill">
            <span>Website</span>
            <span>
                <a href={company['webSite']} target="_blank" rel="noopener noreferrer">
                    {company['webSite']}
                </a>
            </span>
        </li>
    );
    const startDate = company['startDate'] && (
        <li className="skill">
            <span>Worked</span>
            <span>{company['startDate']} - {company['endDate'] ? company['endDate'] : 'Now'}</span>
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
                    {company['responsibilities'] && <li className="skill">
                        <span>Responsibilities</span> <span>{company['responsibilities']}</span>
                    </li>}
                    {technologies.length > 0 && <li className="skill">
                        <span>Technologies</span>
                        {technologies}
                    </li>}
                    {startDate}
                    {webSite}
                </ul>
            </div>
        </div>
    )
}
CompanyItem.propTypes = {
    company: PropTypes.object
};

export default CompanyItem;