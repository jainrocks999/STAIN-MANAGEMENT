import {Alert} from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../component/storage';
import Toast from 'react-native-simple-toast';
//Login
function* doLogin(action) {
  const data=new FormData();
  data.append("username", action.Username)
  data.append("password", action.Password)
 
  const res = yield call(Api.fetchDataByPOST, action.url, data);
  const formatRes=JSON.parse(res) 
  if (formatRes.status == 'true') {
    action.props.navigate('Home')
     console.log('success');
    yield put({
      type: 'User_Login_Success',
      payload: formatRes,
    });
   Toast.show('Login Sucessful')
    // AsyncStorage.setItem(storage.Email,formatRes.email);
    // AsyncStorage.setItem(storage.Name,formatRes.name);
    // AsyncStorage.setItem(storage.Username,formatRes.username);
    // AsyncStorage.setItem(storage.UserId,formatRes.user_id);
    // AsyncStorage.setItem(storage.Lastname,formatRes.lastname);
   AsyncStorage.setItem(storage.Username,formatRes.username);
  } else {
   Toast.show('Please Enter Valid Username and Password')
   console.log('User_Login_Error')
    yield put({
      type: 'User_Login_Error',
    });
  }
}

//Register
function* doRegister(action) {
  const data=new FormData();
  data.append("username", action.Username)
  data.append("email", action.Email)
  data.append("password", action.Password)
  data.append("name", action.Name)
  data.append("lastname", action.LastName)
  
  
  const res = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('complete url',res)
  const formatRes=JSON.parse(res)
  console.log('data success from saga',formatRes)
  if (formatRes.status == 200) {
    action.props.navigate('Login')
    Toast.show(formatRes.message)
    yield put({
      type: 'User_Register_Success',
      payload: formatRes
    });
  } else {
    Toast.show(formatRes.message)
    yield put({
      type: 'User_Register_Error',
    });
  }
}

//EditProfile
function* doEditProfile(action) {
  const data=new FormData()
  data.append("name",action.name)
  data.append("lastname",action.lastname)
  const response = yield call(Api.fetchDataByPOST, action.url,data);
  console.log('Edit user detail'+response)
   const formatedResponse=JSON.parse(response)
   console.log('respostex',formatedResponse);
   console.log(action.url)
  if (formatedResponse.status==200) {
    yield put({
      type: 'User_Edit_Profile_Success',
      payload:formatedResponse.data,
    });
  } else {
    Alert.alert('narendra',response.message);
    yield put({
      type: 'User_Edit_Profile_Error',
    });
  }
}


function* doForgot(action) {
  const data=new FormData();
  data.append("email", action.Email)
  const res = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('complete url',res)
  const formatRes=JSON.parse(res)
  console.log('data success from saga',formatRes)
  if (formatRes.status == 200) {
    console.log('success');
    yield put({
      type: 'User_Forgot_Password_Success',
      payload: formatRes
    });
  } else {
    yield put({
      type: 'User_Forgot_Password_Error',
    });
  }
}

//List
function* doStain(action) {

  const response = yield call(Api.fetchDataByGET, action.url);
   const formatedResponse=JSON.parse(response)
   console.log(action.url)
  if (formatedResponse.status=='true') {
    yield put({
      type: 'User_Stain_Success',
      payload:formatedResponse.data,
    });
  } else {
    Alert.alert('narendra',response.message);
    yield put({
      type: 'User_Stain_Error',
    });
  }
}

//Logout
function* doLogout(action) {

  const response = yield call(Api.fetchDataByGET, action.url);
   const formatedResponse=JSON.parse(response)
  if (formatedResponse.status=='true') {
    yield put({
      type: 'User_Logout_Success',
      payload:formatedResponse.data,
    });
  } else {
    Alert.alert('narendra',response.message);
    yield put({
      type: 'User_Logout_Error',
    });
  }
}

//Version
function* doVersion(action) {
  const response = yield call(Api.fetchDataByGET, action.url);
    yield put({
      type: 'User_Version_Success',
      payload:response,
    });  
}
//Cha
function* doChangePassword(action) {

  const response = yield call(Api.fetchDataByPOST, action.url);
   const formatedResponse=JSON.parse(response)
   console.log(action.url)
  if (formatedResponse.status=='true') {
    yield put({
      type: 'User_Change_Password_Success',
      payload:formatedResponse.data,
    });
  } else {
    Alert.alert('narendra',response.message);
    yield put({
      type: 'User_Change_Password_Error',
    });
  }
}
export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Stain_Request', doStain);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_Logout_Request', doLogout);
  yield takeEvery('User_Version_Request', doVersion);
  yield takeEvery('User_Edit_Profile_Request', doEditProfile);
  yield takeEvery('User_Forgot_Password_Request', doForgot);
  yield takeEvery('User_Change_Password_Request', doChangePassword);
}
