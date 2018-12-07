import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

function ProjectsMainPage(props) {
    const ProjectsElements = props.ProjectsElements;
    return (
        <div className="projectBlock projectGrid">
            <h2>My Projects</h2>
            <div className="container">
                {ProjectsElements}
            </div>
            <NavLink href="" to="/projects/" className="button redButton viewMoreButton">
                View All Projects
            </NavLink>
        </div>
    )
}
ProjectsMainPage.propTypes = {
    ProjectsElements: PropTypes.array
};

export default ProjectsMainPage;