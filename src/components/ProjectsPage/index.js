import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Project from "../ProjectPage";
import projects from "../../data/projects";
import PropTypes from 'prop-types';
import ProjectsMainPage from "./ProjectsMainPage";
import ProjectsDefault from "./ProjectsDefault";

class Projects extends Component {

    render() {
        const ProjectsElements = projects.map(project =>
            <NavLink href="#" to={'/projects/'+project.id} key={project.id} className="project" style={{'backgroundImage': `url(${project.image})`}}>
                <Project project = {project} isList/>
            </NavLink>
        );
        if (this.props.MainPageList){
            return (
                <ProjectsMainPage ProjectsElements={ProjectsElements}/>
            )
        }
        return (
            <ProjectsDefault ProjectsElements={ProjectsElements}/>
        )
    }
}
Projects.propTypes = {
    MainPageList: PropTypes.bool
};
export default Projects;