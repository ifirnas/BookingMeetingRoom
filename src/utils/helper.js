import moment from 'moment';

export function checkAvailability(status, time) {
    const timeslot =  moment(time).format('HH:mm');
    if (status[timeslot] == '1') {
        return 1
    } else {
        return 0
    }
}