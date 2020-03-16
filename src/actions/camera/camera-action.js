import { SET_QR } from '../rooms/types'

export function setQrData(qr) {
    console.log('qr in action: ', qr)
    return {
        type: SET_QR,
        qr: qr
    }
}