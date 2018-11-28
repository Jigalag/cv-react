import React, {Component} from 'react';
import WorkItem from "./workItem";
import workData from "../../data/work";

class Work extends Component {
    constructor(props){
        super(props);
        this.companies = workData.map((company) =>
            <WorkItem company={company}/>
        )
    }
    render() {
        return (
            <div className="container smallContainer">
                {this.companies}
            </div>
        )
    }
}
export default Work;