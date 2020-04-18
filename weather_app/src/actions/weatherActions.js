import { UPDATE_WEATHER } from './actionsTypes';

export const getForecast = weather => ({
    type: UPDATE_WEATHER, 
    payload: weather
})