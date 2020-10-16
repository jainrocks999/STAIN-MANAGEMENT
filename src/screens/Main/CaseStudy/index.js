import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import { ScrollView } from 'react-native-gesture-handler';

const CaseStudy = () => {
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
             <ScrollView style={{flex:1,width:'85%'}}
          contentContainerStyle={{alignItems:'center'}}
          >
        <View style={styles.titleView}>
          <Text style={styles.title}>Case Studies</Text>
        </View>

        <View style={{marginTop:'20%'}}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Travertine Restoration
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Granite countertop cracks repaired near sink
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Factory Finish Restored on Dull, Scratched Marble
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Chanel Store Marble Floor Refinished
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Historic Limestone Staircase Restored
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>
            Large-Scale Natural Stone Restoration Project
            </Text>
          </View>

          
        </View>
        </ScrollView>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(CaseStudy);
