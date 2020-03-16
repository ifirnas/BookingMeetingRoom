import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from './store';
import Booking from './screens/Booking';
import BookingSuccess from './screens/Booking/success';
import Camera from './screens/Camera';
import Icon from 'react-native-vector-icons/Feather';


const App = () => {

  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="booking">
          <Stack.Screen name="booking"            
            component={Booking}
            options={({ navigation }) => ({
              headerTitle: 'Book a Room',
              headerRight: () => (
                
                <Icon name="camera" 
                      size={25} 
                      style={{paddingRight: 20}} 
                      color="#000" 
                      onPress={() => navigation.navigate('camera')}
                />
              )
            })}
          />
          <Stack.Screen name="success"
            component={BookingSuccess}
            options={{ title: 'Booking Success' }}
          />
          <Stack.Screen name="camera"
            component={Camera}
            options={{ title: 'Scan QR' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;