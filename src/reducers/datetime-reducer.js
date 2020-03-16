import {SET_DATE, SET_TIME} from '../actions/rooms/types';
import moment from 'moment';

const initialState = {
    date: new Date(),
    time: new Date().getTime()
}

export function dateReducer(state = initialState.date, action) {
    switch(action.type) {
        case SET_DATE: 
            return {
                date: action.date
            }
        default: 
            return state;
    }
}

export function timeReducer(state = initialState.time, action) {
    switch(action.type) {
        case SET_TIME: 
            return {
                time: action.time
            }
        default: 
            return state;
    }
}

export const getDate = state => state.dateReducer.date;
export const getTime = state => state.timeReducer.time;