import {Url} from "../../config/url";
import { getContactAction } from '../actionCreators/contact';

export function getContacts() {
    return (dispatch) => {
        fetch(`${Url}/contact/my`).then((data) => {
            return data.json();
        }).then((result) => {
            const contact = result.data;
            return dispatch(getContactAction(contact));
        });
    }
}