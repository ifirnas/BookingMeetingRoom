import { fetchRoomsPending, fetchRoomsSuccess, fetchRoomsError } from '../actions/rooms/room-actions';
import settings from '../config/settings';

export function fetchRooms() {    
    
    return dispatch => {
        dispatch(fetchRoomsPending());
        fetch(settings.RoomsAvailabilityEndpoint)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchRoomsSuccess(res))
            return res;
        })
        .catch(error => {
            dispatch(fetchRoomsError(error)); 
        })
    }
}