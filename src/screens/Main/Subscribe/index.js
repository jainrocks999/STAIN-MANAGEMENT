import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, ImageBackground, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../../component/loader';

const SubScribeDetails = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [contents, setContent] = useState()
    const selector = useSelector(state => state.GetSubscribeDetails)
    const isFetching = useSelector(state => state.isFetching)
    const [userId, setuserId] = useState('');
    console.log('rohit jaini123' + JSON.stringify(selector))
    const [button, setButton] = useState(null)
    const [chart, setChart] = useState(false)
    // const [userId,setuserid] = useState(AsyncStorage.getItem(storage.UserId))
    useEffect(() => {
        subscription();
       
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        
        //https://backstage.surphaces.com/wp-json/wp/v1/user/get_subscribe_detail?user_id=26

    },[])


    const handleBackButtonClick = () => {
        BackHandler.addEventListener('hardwareBackPress', navigation.goBack());
        return true;
    }

    const subscription = async () => {
        let UserId = await AsyncStorage.getItem(storage.UserId);
        console.log('userId',UserId);
        setuserId(UserId)
        dispatch({
            type: 'User_SubScribeDetails_Request',
            //url: `v1/user/get_subscribe_detail?user_id=27`
            url: `v1/user/get_subscribe_detail?user_id=${UserId}`
        });
    
      }


    return (
        <View style={{ flex: 1 }}>
            <CustomHeader />
            {isFetching ? <Loader /> : null}
            <ImageBackground

                style={styles.imageBackground}
                source={require('../../../assets/Images/AppBackground.jpg')}

            >
                 <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:20 ,paddingHorizontal:20}}>
                <View style={styles.headingView}>
                    <Text style={styles.heading}>Subscribe Details</Text>
                </View>
                <View style={{flex:0.6,
  justifyContent:'center',
  marginTop:'5%',
  
  }}>

                <View style={styles.settingsContainer}>
          


                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Username :-'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>{selector.username}</Text>
              </TouchableOpacity>
              </View>
                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Email :'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>
              {selector.registered_mail}
                  </Text>
              </TouchableOpacity>
              </View>
                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Purchase Date :'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>{selector.purchase_date}</Text>
              </TouchableOpacity>
              </View>
                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Expiry Date :'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>{selector.exp_date}</Text>
              </TouchableOpacity>
              </View>
                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Amount :'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>{selector.amount}</Text>
              </TouchableOpacity>
              </View>
                    <View>
              <TouchableOpacity  style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}> {'Payment Mode :'}</Text>
              {/* <Text style={styles.settingsItemsText}>{':'}</Text> */}
              <Text style={styles.settingsItemsText}>{selector.payment_mode}</Text>
              </TouchableOpacity>
              </View>
                                  </View>
                                  </View>
                </ScrollView>
            </ImageBackground>

        </View>
    );
}

export default SubScribeDetails
