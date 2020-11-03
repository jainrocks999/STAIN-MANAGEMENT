import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Auth/splash'
import HomeScreen from '../screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import AccManagement from '../screens/Auth/AccManagement';
import AccManagement_1 from '../screens/Auth/AccManagement_1';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Payment from '../screens/Auth/Payment';
import AboutStain from '../screens/Main/AboutStain';
import Support from '../screens/Main/Support';
import Video from '../screens/Main/Video';
import EditProfile from '../screens/Auth/EditProfile';
import StainChartDetail from '../screens/Main/StainChartDetail';
import Asyncstorage from '@react-native-community/async-storage';
import Payment1 from '../screens/Auth/Payment1';
import StainChart from '../screens/Main/StainChart';
import Registration from '../screens/Auth/Registration';
import ChangePassword from '../screens/Auth/ChangePassword';
import About from '../screens/Main/About';
import SupportTwo from '../screens/Main/SupportTwo';
import Resource from '../screens/Main/Resource';
import HowTo from '../screens/Main/HowTo';
const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Splash" headerMode='none'>
        <Stack.Screen name="Splash" component={SplashScreen} />
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Registration}/>
        
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Edit" component={EditProfile} />
        <Stack.Screen name="Change" component={ChangePassword}/>
        <Stack.Screen name="Account" component={AccManagement} />
        <Stack.Screen name="Account_1" component={AccManagement_1} />
        <Stack.Screen name="AboutStains" component={AboutStain} options={{animationEnabled: false,}}/>
        <Stack.Screen name="HowTo" component={HowTo} options={{animationEnabled: false,}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Payment1" component={Payment1}/>
        <Stack.Screen name="Video" component={Video} options={{animationEnabled: false,}}/>
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="StainChart" component={StainChartDetail} />
        <Stack.Screen name="Stain" component={StainChart} options={{animationEnabled: false,}}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="supportTwo" component={SupportTwo}/>
        <Stack.Screen name="resource" component={Resource}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;