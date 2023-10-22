import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './landing';
import RegisterScreen  from './Registration';
import LoginScreen from './Login';
import Home from './Home';
 import Model from './model'
 import itemDetails from './itemDetails'
 import cart from './cart'
 import Order from './Order'
 import orderPlace from './orderPlace';
 import Payment from './payment'
 //import orderTrack from './orderTrack';
//import check from './check';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen name="landing" component={LandingScreen } />
        <Stack.Screen name="Registration" component={RegisterScreen } />
      
      <Stack.Screen name="Login" component={LoginScreen} />  
       <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="Model" component={Model} />  
      <Stack.Screen name="itemDetails" component={itemDetails} />   

      <Stack.Screen name="cart" component={cart} />  
       <Stack.Screen name="Order" component={Order} />
       <Stack.Screen name="orderPlace" component={orderPlace} /> 
       <Stack.Screen name="Payment" component={Payment} />

        {/* <Stack.Screen name="orderTrack" component={orderTrack} />  */}
       {/* <Stack.Screen name="check" component={check} />  */}


        
        

        
        
     </Stack.Navigator>
      
    </NavigationContainer>
   
  );
};

export default App;



