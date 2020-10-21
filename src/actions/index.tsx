import { IAchievement, IChangeEnvAction, IChangeMovingAction, ISetAchievementModal, ISetBackWorld, ISetPlayerCenter, ISetPlayerInvert } from '../types/interfaces';
import  './actiontypes';
import { CHANGE_ENV, CHANGE_MOVING, SET_ACHIEVEMENT_MODAL, SET_BACKWORLD, SET_PLAYER_CENTER, SET_PLAYER_INVERT } from './actiontypes';

// env actions
function changeMoving(payload: boolean) : IChangeMovingAction{
    return {
        type: CHANGE_MOVING,
        payload
    }
}

function changeEnvironment(payload: string) : IChangeEnvAction{
    return{
        type: CHANGE_ENV,
        payload
    }
}

function setPlayerCenter (payload: boolean): ISetPlayerCenter{
    return {
        type: SET_PLAYER_CENTER,
        payload
    }
}

function setBackWorld (payload: boolean): ISetBackWorld{
    return{
        type: SET_BACKWORLD,
        payload
    }
}

function setPlayerInvert(payload: boolean): ISetPlayerInvert{
    return{
        type: SET_PLAYER_INVERT,
        payload
    }
}

// modal actions
function setAchievementModalVisible(payload: IAchievement): ISetAchievementModal{
    return{
        type: SET_ACHIEVEMENT_MODAL,
        payload
    }
}

function setAchievementModalNotVisible():ISetAchievementModal{
    return{
        type: SET_ACHIEVEMENT_MODAL,
        payload: {
            isVisible: false,
            imageUrl: "",
            issuedBy: "",
            issueDate: "",
            title: "",
            descripList: []
        }
    }
}

export const AllActions = {
    EnvActions: {
        changeMoving,
        changeEnvironment,
        setPlayerCenter,
        setBackWorld,
        setPlayerInvert
    },
    ModalActions: {
        setAchievementModalVisible,
        setAchievementModalNotVisible
    }
}