import { TOGGLE_MODE } from "../Constant";


const initialState = {
    isDarkMode: false
}


export const toggleReducer = (State = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return {
                ...State, isDarkMode: !State.isDarkMode
            };
        default:
            return State
    }
}