import React from 'react';

function ProjectListItem(props) {
    const project = props.project;
    return (
        <div className="projectTitle">
            {project.title}
        </div>
    )
}
export default ProjectListItem;