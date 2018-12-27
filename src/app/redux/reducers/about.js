import { GET_USER } from '../constants/about';

const aboutData = {
    skills: [],
    languages: [],
    socialLinks: []
};

export default function (state = aboutData, { type, payload }) {
    switch (type) {
        case GET_USER:
            const fullName = `${payload['firstName']} ${payload['lastName']}`;
            payload.fullName = fullName;
            return { ...state, ...payload};
        default:
            return state;
    }
}