
import { setDate, setTime } from '../actions/rooms/set-datetime-action';

export function setDateService(date) { 
    return dispatch => {
        dispatch(setDate(date))
    }
}

export function setTimeService(time) {
    return dispatch => {
        dispatch(setTime(time))
    }
}