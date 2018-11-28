import React from 'react';
import PropTypes from 'prop-types';

function ProjectsDefault(props) {
    const ProjectsElements = props.ProjectsElements;
    return (
        <div className="projectBlock projectMain">
            <div className="container">
                <h2>Projects</h2>
            </div>
            {ProjectsElements}
        </div>
    )
}
ProjectsDefault.propTypes = {
    ProjectsElements: PropTypes.array
};

export default ProjectsDefault;