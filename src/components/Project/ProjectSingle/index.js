import React from 'react';
import {NavLink} from "react-router-dom";

function ProjectSingle(props) {
    const project = props.project;
    const Technologies = project.technologies.map((item, key) =>
        <span key={key}>{item}</span>
    );
    const Worked = project.start_date && (
        <li className="skill">
            <span>Worked</span>
            <span>
                {project.start_date} - {project.end_date ? project.end_date : 'Now'}
            </span>
        </li>
    );
    const WebSite = project.web_site && (
        <li className="skill">
            <span>Website</span>
            <span>
                <a href={project.web_site} target="_blank" rel="noopener noreferrer">
                    {project.web_site}
                </a>
            </span>
        </li>
    );
    return (
        <div className="container smallContainer">
            <div className="singleProject">
                <img src={project.image} alt={project.title}/>
                <div className="simpleText textLeft floatLeft fullWidth">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul className="skills fullWidth blackList">
                        <li className="skill">
                            <span>Team Size</span>
                            <span>
                                {project.team_size}
                            </span>
                        </li>
                        <li className="skill">
                            <span>Technologies</span>
                            {Technologies}
                        </li>
                        {Worked}
                        {WebSite}
                    </ul>
                </div>
                <div className="textCenter">
                    <NavLink href="" to="/projects/" className="button redButton viewMoreButton">
                        View All Projects
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default ProjectSingle;