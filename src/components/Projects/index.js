import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Project from "../Project";
import projects from "../../data/projects"

class Projects extends Component {

    render() {
        const ProjectsElements = projects.map(project =>
            <NavLink href="#" to={'/projects/'+project.id} key={project.id} className="project" style={{'backgroundImage': `url(${project.image})`}}>
                <Project project = {project} isList/>
            </NavLink>
        );
        return (
            <div className="projectBlock projectMain">
                <div className="container">
                    <h2>Projects</h2>
                </div>
                {ProjectsElements}
            </div>
        )
    }
}
export default Projects;