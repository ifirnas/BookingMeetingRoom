import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../Input';
import moment from 'moment';
import { connect } from 'react-redux';
import { setDateService } from '../../services/setDateTimeService';

class DatePicker extends Component{
    
    state = {
        date: new Date(),
        show: false
    }

    onChange = (event, selectedDate) => {

        const currentDate = selectedDate || this.state.date;
        this.setState({show: Platform.OS === 'ios', date: currentDate});
        this.props.setDateProp(currentDate);
    }

    showDatepicker = () => {
        this.setState({show: true});
    };

    render() {

        const {show, date} = this.state;

        return (
            <View>
              <View>
                <Input label="Date" 
                       onPress={this.showDatepicker}
                       editable={false}
                       value={moment(date).format('DD/MM/YYYY')}
                />
              </View>
              {show && (
                <DateTimePicker
                  testID="datePicker"
                  value={date}
                  mode={'date'}
                  display="calendar"
                  onChange={this.onChange}
                  minimumDate={new Date()}
                />
              )}
            </View>
          );
    }
}

const mapDispatchToProps = (dispatch) => {    
    return {
        setDateProp: (data) => dispatch(setDateService(data))
    }
}
  
export default connect(
    null,
    mapDispatchToProps
)(DatePicker);