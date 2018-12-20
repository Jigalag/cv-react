import {Url} from "../../config/url";
import { getCompaniesAction } from '../actionCreators/company';

export function getCompanies() {
    return (dispatch) => {
        fetch(`${Url}/company/my`).then((data) => {
            return data.json();
        }).then((result) => {
            const companies = result.data.reverse();
            return dispatch(getCompaniesAction(companies));
        });
    }
}