import { StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';

export default StyleSheet.create({
  container: {
      backgroundColor: '#eeeeee',
      borderRadius: 10,
      padding: 20,
      width: '100%',            
  },
  text: {
      paddingBottom: 5
  },
  textDisabled: {
    color: '#888888'
  },
  textActive: {
    color: 'green'
  },    
  ...globalStyles
});