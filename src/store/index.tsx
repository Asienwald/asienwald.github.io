import {createStore} from 'redux';
import rootReducer from '../reducers/';
import {AppState, IEnvState} from '../types/interfaces'


// const Store = configureStore(initialState);


export const Store = createStore(rootReducer);

export default Store;