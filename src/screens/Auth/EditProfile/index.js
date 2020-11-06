// import React, { useEffect, useState } from 'react';
// import {
//   ImageBackground,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   StatusBar
// } from 'react-native';
// import storage from '../../../component/storage';
// import colors from '../../../component/colors';
// import styles from './style';
// import { useNavigation } from '@react-navigation/native';
// import CustomHeader from '../../../component/header1';
// import AsyncStorage from '@react-native-community/async-storage';
// import Toast from 'react-native-simple-toast';
// import { useDispatch } from 'react-redux';
// class EditProfile extends React.Component {
// const EditProfile = () => {
//   const navigation = useNavigation();
//   const [userId, setUserId] = useState()
//   const [username, setUsername] = useState('')
//   const [name, setName] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [email, setEmail] = useState('')
//   console.log(userId)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     EditData();
//   })
//   const EditData = async () => {
//     const username = await AsyncStorage.getItem(storage.Username);
//     setUsername(username)
//     const email = await AsyncStorage.getItem(storage.Email)
//     setEmail(email)
//     const name = await AsyncStorage.getItem(storage.Name);
//     setName(name)
//     const lastname = await AsyncStorage.getItem(storage.Lastname)
//     setLastname(lastname)
//     const userId = await AsyncStorage.getItem(storage.UserId)
//     setUserId(userId)
//   }
//   const loadData = async () => {
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (username == '') {
//       Toast.show('Please Enter Username')
//     }
//     else if (name == '') {
//       Toast.show('Please Enter Name')
//     }
//     else if (lastname == '') {
//       Toast.show('Please Enter Lastname')
//     }
//     else if (email == '') {
//       Toast.show('Please enter valid email');
//     }
//     else
//       dispatch({
//         type: 'User_Edit_Profile_Request',
//         url: 'v1/user/edit_profile',
//         name: name,
//         lastname: lastname,
//         email: email,
//         userId: userId
//       })
//   }

//   const setlast = (item1) => {
//     //setLastname(item)
//   }
//   const setname=(item2)=>{
//     setName(item2)
//   }
//   const setuser = (item3) => {

//    // setUsername(item3)
//   }


//   return (
//     <View style={{ flex: 1 }}>
//       <CustomHeader />
//       <ImageBackground
//         style={styles.imageBackground}
//         source={require('../../../assets/Images/AppBackground.jpg')}>

//         <View style={styles.logoContainer}>
//           <Text style={styles.subHeading}>Edit Your Profile</Text>
//         </View>
//         <View style={styles.textInputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder='Username'
//             value={username}
//             editable={true}
//             placeholderTextColor='grey'
//             onChangeText={text => setuser(text)}
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder='Name'
//             value={name}
//             placeholderTextColor='grey'
//             onChangeText={(text) => setname(text)}
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder='Lastname'
//             value={lastname}
//             placeholderTextColor='grey'
//             onChangeText={(text) => setlast(text)}
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder='Email'
//             placeholderTextColor='grey'
//             value={email}
//             editable={false}

//           />
//         </View>
//         <TouchableOpacity style={styles.button}
//           onPress={loadData}
//         >
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//       <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content' />
//     </View>
//   );
// };

// export default EditProfile

import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Modal,
  Alert
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../component/loader';
//import Header from '../../component/Header';
//import Color from '../../component/Colors';
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
    // this.api();
  }
  componentDidMount = async () => {
    let userId = await AsyncStorage.getItem(storage.UserId);

    // Alert.alert('hello')
    this.props.dispatch({
      type: 'User_Get_Edit_Profile_Request',
      url: `v1/user/get_edit_profile?user_id=${userId}`
    });

    let username = await AsyncStorage.getItem(storage.Username);
    let email = await AsyncStorage.getItem(storage.Email);
    let name = await AsyncStorage.getItem(storage.Name);
    let lastname = await AsyncStorage.getItem(storage.Lastname);
    console.log('d122222d' + username)
    console.log('dd' + email)
    console.log('dd' + name)
    console.log('dd' + lastname)
    this.setState({
      username: username,
      email: email,
      name: name,
      lastname: lastname,
      userId: userId
    })



  }
  loadData = async () => {

    const { userId, username, email, name, lastname } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username == '') {
      Toast.show('Please Enter Username')
    }
    else if (name == '') {
      Toast.show('Please Enter Name')
    }
    else if (lastname == '') {
      Toast.show('Please Enter Lastname')
    }
    else if (email == '') {
      Toast.show('Please enter valid email');
    }
    else
      //Alert.alert('hello')
      this.props.dispatch({
        type: 'User_Edit_Profile_Request',
        url: 'v1/user/edit_profile',
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        userId: userId
      })
    //this.api();
  }

  render() {
    const { username, email, name, lastname } = this.state;
    console.log('dadat'+username)
    const { isFetching, getEditDetails } = this.props;
    // console.log('rohitttttt ' + JSON.stringify(getEditDetails))
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/Images/AppBackground.jpg')}>

          <ScrollView contentContainerStyle={{ flexGrow:1, paddingHorizontal:20,paddingBottom:20,}}>
         
         
          <View style={styles.logoContainer}>
            <Text style={styles.subHeading}>Account Management</Text>
          
          </View>
          <View style={{justifyContent:'center',flex: 0.6,marginTop:'10%',}}>
          <Text style={styles.SignIn}>Edit Your Profile</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Username'
              value={username}
              editable={true}
              placeholderTextColor='grey'
              onChangeText={text => this.setState({
                username: text
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Name'
              value={name}
              placeholderTextColor='grey'
              onChangeText={(text) => this.setState({
                name: text
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Lastname'
              value={lastname}
              placeholderTextColor='grey'
              onChangeText={(text) => this.setState({ lastname: text })}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              placeholderTextColor='grey'
              value={email}
              editable={false}

            />
          </View>
          <TouchableOpacity style={styles.button}
            onPress={this.loadData}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </ImageBackground>
        <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content' />
      </View>
    );
  };
}
const mapStateToProps = state => {
  console.log('rorooror' + JSON.stringify(state))
  return {
    isFetching: state.isFetching,
    getEditDetails: state.getEditDetails,

  };
};
export default connect(mapStateToProps)(EditProfile);

