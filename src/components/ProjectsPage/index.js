import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Project from "../ProjectPage";
import PropTypes from 'prop-types';
import ProjectsMainPage from "./ProjectsMainPage";
import ProjectsDefault from "./ProjectsDefault";
import connect from "react-redux/es/connect/connect";

class Projects extends Component {

    constructor(props){
        super(props);
        this.projects = props.projects;
    }

    render() {
        const ProjectsElements = this.projects.splice(0, this.props.Limit).map(project =>
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
    MainPageList: PropTypes.bool,
    Limit: PropTypes.number
};

function mapStateToProps (state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects);