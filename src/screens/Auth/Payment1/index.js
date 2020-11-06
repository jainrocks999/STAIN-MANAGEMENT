import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';


const AccManagement_1 = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
   

  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
  return (
    <View style={{flex: 1}}>
      <CustomHeader/>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={{ flexGrow:1, paddingHorizontal:20,paddingBottom:30,}}>
        <View style={styles.heading}>

          <Text style={styles.subHeading}>Account Management</Text>
        </View>
        
        <View style={styles.settings}>
          <View>
            <Text style={styles.Subscriber}>Card Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder=" XXXX XXXX XXXX XXXX"
              placeholderTextColor="grey"
            />
          </View>
         <View style={styles.expiry}>
         <View style={{width:'45%'}}>
            <Text style={styles.Subscriber}>Expiry</Text>
            <TextInput
              style={styles.textInput}
              placeholder="XX/XX"
              placeholderTextColor="grey"
            />
          </View>
          <View style={{width:'45%'}}>
            <Text style={styles.Subscriber}>Cvv</Text>
            <TextInput
              style={styles.textInput}
              placeholder="XXX"
              placeholderTextColor="grey"
            />
          </View>
         </View>
          <View style={{marginTop:'5%'}}>
            <Text style={styles.Subscriber}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder=" "
              placeholderTextColor="grey"
            />
          </View>

        
          <View style={[styles.checkboxContainerView,{marginTop:'5%'}]}>
            <View style={styles.checkboxContainerView1}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                boxType="square"
                onFillColor="red"
                onTintColor="#fffff"
              />
            </View>
            <Text style={styles.checkbox}>Save Card Details</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          </View>
          </ScrollView>
      </ImageBackground>
     <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
    </View>
  );
};

export default connect()(AccManagement_1);
