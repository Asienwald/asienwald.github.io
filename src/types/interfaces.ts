import { CHANGE_ENV, CHANGE_MOVING, SET_BACKWORLD, SET_PLAYER_CENTER, SET_PLAYER_INVERT } from "../actions/actiontypes";

export interface IParallax{
    image: string,
    index: number
}

export interface ISchool{
    schoolName: string,
    studyPeriod: string,
    studyScope: string,
    academicComponent: JSX.Element,
    ccaList: string[],
    awardsList: string[]
}

export interface ISubSection{
    sectionTitle: string,
    bulletPoints: string[]
}

export interface IPosition{
    role: string,
    division: string,
    organisation: string,
    positionPeriod: string,
    descriptionList: string[]
}


export interface AppState{
    env: IEnvState
}

export interface IEnvState{
    env: {
        moving: boolean
        playerCenter: boolean
        envBg: string
        backToWorld: boolean
        playerInvert: boolean
    }
}

export interface IChangeMovingAction{
    type: typeof CHANGE_MOVING,
    payload: boolean
}

export interface ISetPlayerCenter{
    type: typeof SET_PLAYER_CENTER,
    payload: boolean
}

export interface IChangeEnvAction{
    type: typeof CHANGE_ENV,
    payload: string
}

export interface ISetBackWorld{
    type: typeof SET_BACKWORLD,
    payload: boolean
}

export interface ISetPlayerInvert{
    type: typeof SET_PLAYER_INVERT,
    payload: boolean
}

export type TEnvActionTypes = IChangeMovingAction | IChangeEnvAction | ISetPlayerCenter | ISetBackWorld | ISetPlayerInvert;