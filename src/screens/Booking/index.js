import React, { Component } from 'react';
import Rooms from '../../components/Rooms';
import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';
import { connect } from 'react-redux';
import { fetchRooms } from '../../services/getRoomsService';
import { getRoomsPending, getRooms, getRoomsError } from '../../reducers/rooms-reducer';
import { getDate, getTime } from '../../reducers/datetime-reducer';
import { View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';

class Booking extends Component {

    componentDidMount() {
        this.props.getAvailability();
    }

    render() {    

        return (
            <View style={styles.container}>


                <DatePicker />

                <TimePicker />

                <SafeAreaView>
                    <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                        {this.props.rooms ? this.props.rooms.map((room, i) => {
                            return (
                                <View key={i} style={styles.cards}>
                                    <Rooms {...room} time={this.props.time} />
                                </View>
                            )
                        }) : []}
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: getRoomsError(state),
        rooms: getRooms(state),
        pending: getRoomsPending(state),
        date: getDate(state),
        time: getTime(state)
    }
}

const mapDispatchToProps = (dispatch) => {    
    return {
        getAvailability: (data) => dispatch(fetchRooms(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Booking);
