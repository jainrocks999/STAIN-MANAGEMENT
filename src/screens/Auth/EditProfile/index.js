import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  TextInput,

} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../component/loader';
import TitleText from '../../../component/TitleText';
import CustomButton from '../../../component/Button';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      username: AsyncStorage.getItem(storage.Username),
      name: AsyncStorage.getItem(storage.Name),
      lastname: '',
      email: '',
    };
  }
  componentDidMount = async () => {
    let userId = await AsyncStorage.getItem(storage.UserId);
    this.props.dispatch({
      type: 'User_Get_Edit_Profile_Request',
      url: `v1/user/get_edit_profile?user_id=${userId}`,
    });

    let username = await AsyncStorage.getItem(storage.Username);
    let email = await AsyncStorage.getItem(storage.Email);
    let name = await AsyncStorage.getItem(storage.Name);
    let lastname = await AsyncStorage.getItem(storage.Lastname);

    this.setState({
      username: username,
      email: email,
      name: name,
      lastname: lastname,
      userId: userId,
    });
  };

  loadData = async () => {
    const {userId, username, email, name, lastname} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username == '') {
      Toast.show('Please Enter Username');
    } else if (name == '') {
      Toast.show('Please Enter Name');
    } else if (lastname == '') {
      Toast.show('Please Enter Lastname');
    } else if (email == '') {
      Toast.show('Please enter valid email');
    } else
      this.props.dispatch({
        type: 'User_Edit_Profile_Request',
        url: 'v1/user/edit_profile',
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        userId: userId,
      });
  };

  render() {
    const {username, email, name, lastname} = this.state;

    const {isFetching, getEditDetails} = this.props;
    return (
      <View style={{flex: 1}}>
        <CustomHeader />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            <View style={styles.logoContainer}>
              <TitleText title={'Account Management'.toUpperCase()} color={'#9E3B22'} fontSize={22}/>
            </View>
            <View
              style={{justifyContent: 'center', flex: 0.6, marginTop: '10%'}}>
              <Text style={styles.SignIn}>Edit Your Profile</Text>

              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  value={name}
                  placeholderTextColor={colors.textGrey}
                  onChangeText={(text) =>
                    this.setState({
                      name: text,
                    })
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Lastname"
                  value={lastname}
                  placeholderTextColor={colors.textGrey}
                  onChangeText={(text) => this.setState({lastname: text})}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  placeholderTextColor={colors.textGrey}
                  value={email}
                  editable={false}
                />
              </View>

              <CustomButton title="UPDATE" onPress={this.loadData} />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  onPress={() => {
                    this.props.navigation.navigate('Change');
                  }}
                  style={[styles.checkbox, {color: '#0058FF'}]}>
                  Change Password ?
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        <StatusBar
          backgroundColor={colors.darkOrange}
          barStyle="light-content"
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    getEditDetails: state.getEditDetails,
  };
};
export default connect(mapStateToProps)(EditProfile);
