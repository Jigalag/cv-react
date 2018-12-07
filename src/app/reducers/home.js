const homeData = {
    "title": "<span>Coding</span> is an <span>Art</span>"
};
export default function (state = homeData, action) {
    switch (action.type) {
        case "CHANGE_TITLE":
            const newState = {
                ...state
            };
            newState.title = action.payload;
            return newState;
        default: break;
    }
    return state;
}