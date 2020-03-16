import {FETCH_ROOMS_PENDING, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_ERROR} from '../actions/rooms/types';

const initialState = {
    pending: false,
    rooms: [],
    error: null
}

export function roomsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ROOMS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_ROOMS_SUCCESS: 
            return {
                ...state,
                pending: false,
                rooms: action
            }
        case FETCH_ROOMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getRooms = state => state.roomsReducer.rooms.rooms;
export const getRoomsPending = state => state.pending;
export const getRoomsError = state => state.error;