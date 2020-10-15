import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Auth/splash'
import HomeScreen from '../screens/Main/HomeScreen';
import colors from '../component/colors';
import LoginScreen from '../screens/Auth/LoginScreen';
import AccManagement from '../screens/Auth/AccManagement';
import AccManagement_1 from '../screens/Auth/AccManagement_1';
import About from '../screens/Auth/About';
import Buy from '../screens/Auth/Buy';
import AboutStain from '../screens/Auth/AboutStain';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"
        headerMode='none'
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AboutStains" component={AboutStain}/>
        <Stack.Screen name="Account" component={AccManagement} />
        <Stack.Screen name="Account_1" component={AccManagement_1} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Buy" component={Buy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;