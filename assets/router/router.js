import React from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Home from '../auth/Home';
import Rapunzel from '../auth/Rapunzel';
import LordOfRing from '../auth/LordOfRing';
import Notification  from '../auth/Notification';


import  {NavigationContainer} from '@react-navigation/native';
import  {createNativeStackNavigator}  from '@react-navigation/native-stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
          <Stack.Screen name="Rapunzel" component={Rapunzel} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LordOfRing" component={LordOfRing} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
        
    );
    
}

const Tab = createBottomTabNavigator();

 function AppRouter() {
    return(
        <NavigationContainer>
          <Tab.Navigator >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
        </NavigationContainer>
    );
   }
