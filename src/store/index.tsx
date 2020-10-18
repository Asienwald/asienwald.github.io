import {createStore} from 'redux';
import rootReducer from '../reducers/';
import {IEnvState} from '../types/interfaces'

const initialState: IEnvState = {
    env:{
        moving: true,
        playerCenter: true,
        envBg: "forest",
        backToWorld: false,
        playerInvert: false
    }
}

export const Store = createStore(rootReducer, initialState);

export default Store;