import {CHANGE_TITLE} from '../constants/home';

const homeData = {
    "title": "<span>Coding</span> is an <span>Art</span>"
};

export default function (state = homeData, {type, payload}) {
    switch (type) {
        case CHANGE_TITLE:
            const newState = {
                ...state
            };
            newState.title = payload;
            return newState;
        default:
            return state;
    }
}