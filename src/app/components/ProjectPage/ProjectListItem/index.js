import React from 'react';
import PropTypes from 'prop-types';

function ProjectListItem(props) {
    const project = props.project;
    return (
        <div className="projectTitle">
            {project.title}
        </div>
    )
}
ProjectListItem.propTypes = {
    project: PropTypes.object
};

export default ProjectListItem;