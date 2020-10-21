import {createStore} from 'redux';
import rootReducer from '../reducers/';
import {AppState, IEnvState} from '../types/interfaces'

const initialState: AppState = {
    env:{
        moving: true,
        playerCenter: true,
        envBg: "forest",
        backToWorld: false,
        playerInvert: false
    },
    modal: {
        achievementModal: {
            imageUrl: "",
            issueDate: "",
            title: "",
            issuedBy: "",
            descripList: []
        }
    }
}

// const Store = configureStore(initialState);


export const Store = createStore(rootReducer);

export default Store;