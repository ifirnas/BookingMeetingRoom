import { SET_DATE, SET_TIME } from './types';

export function setDate(date) {
    return {
        type: SET_DATE,
        date: date
    }
}

export function setTime(time) {
    return {
        type: SET_TIME,
        time: time
    }
}