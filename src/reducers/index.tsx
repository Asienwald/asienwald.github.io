import { combineReducers } from 'redux'
import { AppState } from '../types/interfaces';
import envReducer from './envReducers'
import modalReducer from './modalReducers';


const rootReducer = combineReducers({
    env: envReducer,
    modal: modalReducer
})


export default rootReducer;

