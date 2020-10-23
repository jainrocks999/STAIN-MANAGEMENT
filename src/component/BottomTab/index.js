import React, { useEffect } from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import style from './style';



function BottomTab({goToAboutStain,goToStainChart,goToWhatIs}){

  const navigation = useNavigation();
  return (
        <View style={styles.header}>

<TouchableOpacity onPress={()=>{
  navigation.navigate('Home')
}}>
<Image source={require('../../assets/Icons/home.png')}
style={style.bottomTab}
resizeMethod={'resize'}
resizeMode='center'
/>
</TouchableOpacity>

<TouchableOpacity 
onPress={()=>{
  navigation.navigate('Video')
}}>
<Image source={require('../../assets/Icons/Video.png')}
style={style.bottomTab}
resizeMode='center'/>
</TouchableOpacity>

<TouchableOpacity 
onPress={goToAboutStain}>
<Image source={require('../../assets/Icons/About.png')}
style={style.bottomTab}
resizeMode='center' />
</TouchableOpacity>

<TouchableOpacity 
 onPress={goToWhatIs}>
<Image source={require('../../assets/Icons/How_To.png')}
style={style.bottomTab}
resizeMode='center' />
</TouchableOpacity>

<TouchableOpacity  
   onPress={goToStainChart}>
<Image source={require('../../assets/Icons/Stain_Chart.png')}
style={style.bottomTab}
resizeMode='center' />
</TouchableOpacity>

        </View>
    
  );
}

export default BottomTab
