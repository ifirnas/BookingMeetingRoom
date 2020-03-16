import React, { Component } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../Input';
import moment from 'moment';
import { connect } from 'react-redux';
import { setTimeService } from '../../services/setDateTimeService';

class TimePicker extends Component {

    state = {
        time: new Date(),
        show: false
    }

    onChange = (event, selectedTime) => {
        const currentTime = selectedTime || this.state.time;
        this.setState({ show: Platform.OS === 'ios', time: currentTime });
        this.props.setTimeProp(currentTime);
    };

    showTimepicker = () => {
        this.setState({ show: true });
    };

    render() {

        const { show, time } = this.state;

        return (
            <View>
                <View>
                    <Input  label="Time Slot" 
                            onPress={this.showTimepicker}
                            editable={false}
                            value={moment(time).format('h:mm a')}
                    />
                </View>
                {show && (
                    <DateTimePicker
                        testID="timePicker"
                        timeZoneOffsetInMinutes={0}
                        value={time}
                        mode={'time'}
                        is24Hour={false}
                        display="clock"
                        onChange={this.onChange}
                    />
                )}
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {    
    return {
        setTimeProp: (data) => dispatch(setTimeService(data))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TimePicker);