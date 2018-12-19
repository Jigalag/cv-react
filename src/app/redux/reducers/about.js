import { GET_USER } from '../constants/about';

export default function (state = {}, { type, payload }) {
    switch (type) {
        case GET_USER:
            const fullName = `${payload['firstName']} ${payload['lastName']}`;
            payload.fullName = fullName;
            return { ...state, ...payload};
        default:
            return state;
    }
}