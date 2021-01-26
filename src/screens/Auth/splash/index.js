//Import Npm 
import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import StatusBar from '../../../component/StatusBar';
import { useDispatch,useSelector,connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

//create Function
class SplashScreen extends React.Component{
  constructor(props) {
    super(props);
    this.getSubscribeDetail()
  }
//   const navigation = useNavigation();
//   const [version, setVersion] = useState('');
//   const dispatch=useDispatch();
//   const selector=useSelector(state=>state.GetSubscribeDetails);
//  useEffect(() => {
//     getSubscribeDetail();
//     directCall();
//     apiCall();
   
//   }, []);
    componentDidMount(){
     
      this.apiCall()
      this.directCall()
    
    }

   directCall = async () => {
     const {SubscribeDetails}=this.props
    
    let Username = await AsyncStorage.getItem(storage.Username);

    if (Username == null) {
      setTimeout(() => this.props.navigation.replace('Login'), 2000);
    } else {
      const currentDate=moment().format("MMM-DD-YYYY hh:mm:ss");
      console.log('current_date',currentDate)
      console.log('narndra',SubscribeDetails.exp_date)
      //  if(SubscribeDetails.exp_date >= currentDate){
      setTimeout(() => this.props.navigation.replace('Home'), 2000);
      console.log('ets worikkdgj')
       }
    //    else{
    //     Alert.alert('Subscription date complete')
    //    }
    // }
  };
   apiCall = async () => {
    await fetch('https://backstage.surphaces.com/wp-json/wp/v1/app/vesion')
      .then((res) => res.json())
      // .then((response) => setVersion(response));
  };
   getSubscribeDetail=async()=>{
    let userId = await AsyncStorage.getItem(storage.UserId);
    console.log('narendra here',userId)
    this.props.dispatch({
      type: 'User_SubScribeDetails_Request',
      url: `v1/user/get_subscribe_detail?user_id=${userId}`,
    });
  }
 
  render(){
  return (
    <View style={styles.MainView}>
      <View style={styles.header}></View>
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/Images/logo.png')}
          />
        </View>
      </ImageBackground>
      <StatusBar />
    </View>
  );
};
}
const mapStateToProps = (state) => {

  return {
    isFetching: state.isFetching,
    SubscribeDetails:state.GetSubscribeDetails
  };
};
export default connect(mapStateToProps)(SplashScreen);

