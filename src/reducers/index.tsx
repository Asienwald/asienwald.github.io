import { combineReducers } from 'redux'
import { AppState } from '../types/interfaces';
import envReducer from './envReducers'

// combineReducers function returns empty initial state
// const rootReducer = combineReducers({
//     envReducer
// })

const rootReducer = envReducer;

export default rootReducer;

