import React, {Component} from 'react';
import ProjectSingle from "./ProjectSingle";
import ProjectListItem from "./ProjectListItem";
import projects from "../../data/projects"

class Project extends Component {
    constructor(props) {
        super(props);
        this.isList = props.isList;
        this.project = props.project;
        this.projectId = (this.props.match && this.props.match.params ? this.props.match.params : 0).id * 1;
        if (!this.project && this.projectId !== 0) {
            this.project = projects.find((project) => {
                return project.id === this.projectId;
            });
        }
    }

    render() {
        if (this.isList) {
            return <ProjectListItem project={this.project}/>
        }
        return (
            <ProjectSingle project={this.project}/>
        )
    }
}
export default Project;