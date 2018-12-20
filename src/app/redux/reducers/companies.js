import {GET_COMPANIES} from "../constants/company";

const companiesData = [];

export default function (state = companiesData, {type, payload}) {
    switch (type) {
        case GET_COMPANIES:
            return [ ...state, ...payload];
        default:
            return state;
    }

}