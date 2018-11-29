const navigation = {
    isOpen: false
};
export default function (state = navigation, action) {
    switch (action.type) {
        case "TOGGLE_NAV":
            const toggleState = {
                ...state
            };
            toggleState.isOpen = !state.isOpen;
            return toggleState;
        case "CLOSE_NAV":
            const closeState = {
                ...state
            };
            closeState.isOpen = false;
            return closeState;
        default:
            break;
    }
    return state;
}