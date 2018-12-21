import {GET_CONTACT} from "../constants/contact";

const contactData = {
    socialLinks: []
};

export default function (state = contactData, {type, payload}) {
    switch (type) {
        case GET_CONTACT:
            return { ...state, ...payload};
        default:
            return state;
    }
}