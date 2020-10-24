import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Satusbar';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import { ScrollView } from 'react-native-gesture-handler';

const Buy = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        onPress={() => {
          Alert.alert('hey');
        }}
      />

      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
          <ScrollView style={{flex:1,height:Dimensions.get('screen').height}}
          contentContainerStyle={{alignItems:'center'}}
          >
        <View style={styles.headingView}>
          <Text style={styles.title}>RESOURCES</Text>
        </View>
        <View style={styles.iconView}></View>
        <View style={styles.subHeadingView}>
          <Text style={styles.heading}>
            Dr. Fred’s Innovative Solutions Professional Stain Removal Reagents
          </Text>
          <Text style={styles.subHeading}>
            Over many years as a contractor and expert, Fred Hueston refined the
            techniques and and ultimately created just 3 special reagents that
            are needed to treat virtually any kind of stain. These reagents are
            now available through the Dr. Fred’s Innovative Solutions product
            line. 
            

          </Text>
          <Text style={[styles.subHeading,{marginTop:'10%',fontStyle:'italic'}]}>
          They include:
          </Text>
          <Text style={styles.subHeading}>
          <Text style={[styles.subHeading,{fontWeight:'bold'}]}> • Reagent #1</Text> for organic stains A blend of
            peroxides and other reactive reagents that effectively break down
            organic stains. • Reagent #2 for inorganic stains A blend of
            solvents designed to effectively remove inorganic stains. 
            </Text>
            <Text style={styles.subHeading}>
          <Text style={[styles.subHeading,{fontWeight:'bold'}]}> • Reagent #2</Text> for inorganic stains A blend of
            solvents designed to effectively remove inorganic stains. 
            </Text>
            <Text style={styles.subHeading}>
          <Text style={[styles.subHeading,{fontWeight:'bold'}]}> • Reagent #3</Text> for metal stains A blend of metal reducing reagents, formulated
            to treat metal stains.
            </Text>
            <Text style={[styles.subHeading,{marginTop:'5%'}]}>
          <Text style={[styles.subHeading,{fontWeight:'bold'}]}> • To order: </Text> ESP Sales Reynolds Circle Business
            Park 434 Roberson Ln. San Jose, CA 95112 (408) 441-1407
            www.espsales.net PROFESSIONAL TRAINING Interactive eLearning Course
            on Stain Management and other courses offered by Fred Hueston and
            other industry experts can be found at
            https://elearninginstitute.surphaces.com.
            </Text>
            
        </View>
        </ScrollView>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(Buy);
