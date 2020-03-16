
import { setQrData } from '../actions/camera/camera-action';

export function setQrDataService(qr) { 
    console.log('qr from service:  ', qr)
    return dispatch => {
        dispatch(setQrData(qr))
    }
}