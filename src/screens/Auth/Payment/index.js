import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler
} from 'react-native';
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
        <View style={styles.heading}>
          <Text style={styles.subHeading}>Account Management</Text>
        </View>
        
        <View style={styles.settings}>
          <Text style={styles.SignIn}>Choose a payment method </Text>
          

          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',borderWidth:0.3, padding:10,borderColor:colors.darkOrange
            }}>
            <Image 
            source={require('../../../assets/Icons/card1.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
                Credit / Debit Card
              </Text>
            </View>
          </View>
          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop:'5%',borderWidth:0.3, padding:10,borderColor:colors.darkOrange
            }}>
            <Image 
  
            source={require('../../../assets/Icons/google1.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
                Google Wallet
              </Text>
            </View>
          </View>
          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop:'5%',borderWidth:0.3, padding:10,borderColor:colors.darkOrange
            }}>
            <Image 
            source={require('../../../assets/Icons/amazon.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
                Amazon Pay
              </Text>
            </View>
          </View>
          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop:'5%',borderWidth:0.3, padding:10,borderColor:colors.darkOrange
            }}>
            <Image 
            source={require('../../../assets/Icons/paypal.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
                Paypal
              </Text>
            </View>
          </View>
        

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Payment1');
            }}>
            <Text style={styles.buttonText}>POCEED</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
     <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
    </View>
  );
};

export default connect()(AccManagement_1);
