import React from 'react';
import { Alert } from 'react-native'

const Confirmation = ({ title, message, onConfirm }) => {
  return (
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: onConfirm },
      ],
      { cancelable: true },
    )
  )
}

export default Confirmation;