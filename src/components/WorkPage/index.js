import React, {Component} from 'react';
import WorkItem from "./workItem";
import connect from "react-redux/es/connect/connect";

class Work extends Component {
    constructor(props){
        super(props);
        this.companies = props.companies.map((company) =>
            <WorkItem key={company.id} company={company}/>
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
function mapStateToProps (state) {
    return {
        companies: state.companies
    }
}

export default connect(mapStateToProps)(Work);