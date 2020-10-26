import {IDataState} from '../types/interfaces';
import data from '../data/data.json';

const initialDataState: IDataState = data;

export default function dataReducer(state: IDataState = initialDataState, action: any){
    return state;
}  