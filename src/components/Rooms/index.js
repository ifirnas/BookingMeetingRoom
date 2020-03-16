import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from './styles';
import { checkAvailability } from "../../utils/helper";

class Rooms extends Component {

    render() {

        const { name, availability, level, capacity, time } = this.props;

        return ( 
            <>
                <View style={styles.container}>
                    <View style={[styles.row]}>
                        <Text style={[styles.leftContainer, styles.bold]}>{name}</Text>
                        <Text style={[styles.rightContainer, styles.italic]}>
                            {checkAvailability(availability, time) == 1 ? 
                                <Text style={styles.textActive}>Available</Text>
                                :
                                <Text style={styles.textDisabled}>Not Available</Text>
                            }
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.leftContainer}>Level {level}</Text>
                        <Text style={styles.rightContainer}>{capacity} Pax</Text>
                    </View>
                </View>
            </>
        )
    }
}

export default Rooms;