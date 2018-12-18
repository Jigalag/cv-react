import {Url} from "../../config/url";
import { getUser } from '../actionCreators/about';

export function getUserData() {
    return (dispatch) => {
        fetch(`${Url}/user`).then((data) => {
            return data.json();
        }).then((result) => {
            const userData = result.data;
            if (userData.skills) {
                userData.skills = userData.skills.reverse();
            }
            return dispatch(getUser(userData));
        });
    }
}