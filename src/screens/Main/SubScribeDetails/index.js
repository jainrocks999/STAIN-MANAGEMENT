import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, ImageBackground, Text, View } from 'react-native';
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
    const [userId, setuserId] = useState(AsyncStorage.getItem(storage.UserId));
    console.log('rohit jaini' + JSON.stringify(selector))
    const [button, setButton] = useState(null)
    const [chart, setChart] = useState(false)
    // const [userId,setuserid] = useState(AsyncStorage.getItem(storage.UserId))
    useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        dispatch({
            type: 'User_SubScribeDetails_Request',
            url: `v1/user/get_subscribe_detail?user_id=27`
        });
        //https://backstage.surphaces.com/wp-json/wp/v1/user/get_subscribe_detail?user_id=26

    })

    const handleBackButtonClick = () => {
        BackHandler.addEventListener('hardwareBackPress', navigation.goBack());
        return true;
    }


    return (
        <View style={{ flex: 1 }}>
            <CustomHeader />
            {isFetching ? <Loader /> : null}
            <ImageBackground

                style={styles.imageBackground}
                source={require('../../../assets/Images/AppBackground.jpg')}

            >
                <View style={styles.headingView}>
                    <Text style={styles.heading}>Subscribe Details</Text>
                </View>
                <View style={styles.subHeadingView}>
                    <Text style={styles.subHeading}>
                        {selector.username}
                    </Text>
                    <Text style={styles.subHeading}>
                        {selector.registered_mail}
                    </Text>
                    <Text style={styles.subHeading}>
                        {selector.purchase_date}
                    </Text>
                    <Text style={styles.subHeading}>
                        {selector.exp_date}
                    </Text>
                    <Text style={styles.subHeading}>
                        {selector.amount}
                    </Text>
                    <Text style={styles.subHeading}>
                        {selector.payment_mode}
                    </Text>
                </View>
            </ImageBackground>

        </View>
    );
}

export default SubScribeDetails
