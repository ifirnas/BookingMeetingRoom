import {SET_QR} from '../actions/camera/types';

const initialState = {
    qr: ''
}

export function qrReducer(state = initialState, action) {
    switch(action.type) {
        case SET_QR: 
            return {
                qr: action.qr.map(d => d.data)
            }
        default: 
            return state;
    }
}

export const getQrData = state => state.qrReducer.qr.toString();