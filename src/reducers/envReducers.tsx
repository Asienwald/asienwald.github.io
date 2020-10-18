import { CHANGE_ENV, CHANGE_MOVING, SET_BACKWORLD, SET_PLAYER_CENTER, SET_PLAYER_INVERT } from "../actions/actiontypes";
import {IEnvState, TEnvActionTypes} from '../types/interfaces'


export default function envReducer(state : any = {}, action: TEnvActionTypes){
    switch(action.type){
        case CHANGE_MOVING:
            return {
                ...state,
                env: {
                    ...state.env,
                    moving: action.payload
                }
            }
        case SET_PLAYER_CENTER:
            return{
                ...state,
                env: {
                    ...state.env,
                    playerCenter: action.payload
                }
            }
        case CHANGE_ENV:
            return {
                ...state,
                env: {
                    ...state.env,
                    envBg: action.payload
                }
            }
        case SET_BACKWORLD:
            return {
                ...state,
                env: {
                    ...state.env,
                    backToWorld: action.payload
                }
            }
        case SET_PLAYER_INVERT:
            return {
                ...state,
                env: {
                    ...state.env,
                    playerInvert: action.payload
                }
            }
        default:
            return state
    }
}