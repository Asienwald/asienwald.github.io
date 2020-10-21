import { SET_ACHIEVEMENT_MODAL } from '../actions/actiontypes';
import {IModalState, TModalActionTypes} from '../types/interfaces'

const initialModalState: IModalState = {
    achievementModal: {
        isVisible: false,
        imageUrl: "",
        issueDate: "",
        title: "",
        issuedBy: "",
        descripList: []
    }
}

export default function modalReducer(state: IModalState = initialModalState, action: TModalActionTypes){
    switch(action.type){
        case SET_ACHIEVEMENT_MODAL:
            return{
                ...state,
                achievementModal: action.payload
            }
        default:
            return state;
    }
}