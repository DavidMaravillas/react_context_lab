import { UPDATE_TIME } from './actionsTypes';

export const getTime = time => ({
    type: UPDATE_TIME, 
    payload: time
})