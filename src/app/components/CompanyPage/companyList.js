import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyItem from "./companyItem";

class CompanyList extends Component {

    render() {
        this.companies = this.props.companiesList.map((company) =>
            <CompanyItem key={company._id} company={company}/>
        );
        return (
            <div className="container smallContainer">
                {this.companies}
            </div>
        )
    }
}
CompanyList.propTypes = {
    companiesList: PropTypes.array
};

export default CompanyList;