import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {getCompanies} from "../../redux/actions/company";
import CompanyList from "./companyList";

class Company extends Component {
    componentDidMount() {
        this.props.companies.length === 0 && this.props.getMyCompanies();
    }

    render() {
        return (
            <div className="container smallContainer">
                <CompanyList companiesList={this.props.companies}/>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        companies: state.companies
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getMyCompanies: () => {
            dispatch(getCompanies())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);