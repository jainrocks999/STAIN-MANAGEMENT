import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Auth/splash'
import HomeScreen from '../screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AccManagement from '../screens/Main/AccManagement';
import AccManagement_1 from '../screens/Main/AccManagement_1';
import AboutStain from '../screens/Main/AboutStain';
import Support from '../screens/Main/Support';
import Video from '../screens/Main/Video';
import EditProfile from '../screens/Main/EditProfile';
import StainChartDetail from '../screens/Main/StainChartDetail';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Splash" headerMode='none'>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Edit" component={EditProfile} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Account" component={AccManagement} />
        <Stack.Screen name="Account_1" component={AccManagement_1} />
        <Stack.Screen name="AboutStains" component={AboutStain}/>
        <Stack.Screen name="Video" component={Video}/>
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="StainChart" component={StainChartDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;