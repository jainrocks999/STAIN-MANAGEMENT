import React, { useEffect, useState } from 'react';
import {Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';



const About =()=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  
  return (
    <View style={{flex:1}}>
<CustomHeader onPress ={()=>{Alert.alert('hey')}}/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.headingView}>
           <Text style={styles.heading}>ABOUT THIS APP</Text>
            </View>
              <View style={styles.subHeadingView}>
           <Text style={styles.subHeading}>SurpHaces is a professional resource and support organization for quality surface PROS and their customers. At SurpHaces, you can find expert answers, solutions, and service providers for stone, tile, terrazzo, wood, carpet and interior textiles, polished concrete, metal, VCT, and more. The PROS in this network consist of skilled specialists in a variety of disciplines including specification, installation, repair, restoration, and maintenance. Each one is concerned with the art and science of surfaces—that is, they provide solutions that take into account both the beauty of surfaces and other important considerations, such as surface functionality, safety, preservation, and sustainability. It was with help from our Chief Technical Director, author of over 30 books, 10 instructional videos, and over 100 articles on stone installation, care, and restoration in both the United States and foreign publications and journals, Fred Hueston is a world renowned industry expert that this app was created. It was created to help you find answers quickly about any particular stain you may need information on immediately or to just use for reference as needed.</Text>
            </View>
             
            

         
          </ImageBackground>
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(About);
