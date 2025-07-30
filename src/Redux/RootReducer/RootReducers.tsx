import { combineReducers } from 'redux';
import { toggleReducer } from '../Reducers/DarkReducer';

const rootReducer = combineReducers({
    DarkMode: toggleReducer
});

export default rootReducer;
