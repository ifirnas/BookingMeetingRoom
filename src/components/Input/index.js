import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Input = (props) => {

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <TextInput
          style={styles.input}
          {...props}          
        />
      </TouchableOpacity> 
    </View>
  )
}

export default Input;