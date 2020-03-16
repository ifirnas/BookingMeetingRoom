import { FETCH_ROOMS_PENDING, FETCH_ROOMS_ERROR, FETCH_ROOMS_SUCCESS} from './types'

export function fetchRoomsPending() {
    return {
        type: FETCH_ROOMS_PENDING
    }
}

export function fetchRoomsSuccess(rooms) {
    return {
        type: FETCH_ROOMS_SUCCESS,
        rooms: rooms
    }
}

export function fetchRoomsError(error) {
    return {
        type: FETCH_ROOMS_ERROR,
        error: error
    }
}