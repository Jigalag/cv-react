import React, {Component} from 'react';
import ProjectSingle from "./ProjectSingle";
import ProjectListItem from "./ProjectListItem";
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

class Project extends Component {
    constructor(props) {
        super(props);
        this.projects = props.projects;
        this.isList = props.isList;
        this.project = props.project;
        this.projectId = (this.props.match && this.props.match.params ? this.props.match.params : 0).id * 1;
        if (!this.project && this.projectId !== 0) {
            this.project = this.projects.find((project) => {
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
Project.propTypes = {
    isList: PropTypes.bool,
    project: PropTypes.object
};
function mapStateToProps (state) {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Project);