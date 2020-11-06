import { Alert } from 'react-native';
import { takeEvery, put, call, take } from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../component/storage';
import Toast from 'react-native-simple-toast';
//Login
function* doLogin(action) {
  const data = new FormData();
  data.append("username", action.Username)
  data.append("password", action.Password)
  const res = yield call(Api.fetchDataByPOST, action.url, data);
  const formatRes = JSON.parse(res)
  const id = JSON.stringify(formatRes.user_id)
  if (formatRes.status == 'true') {
    yield put({
      type: 'User_Login_Success',
      payload: formatRes,
    });

    if (formatRes.url == '') {
      AsyncStorage.setItem(storage.Email, formatRes.email);
      AsyncStorage.setItem(storage.Name, formatRes.name);
      AsyncStorage.setItem(storage.UserId, id);
      AsyncStorage.setItem(storage.Lastname, formatRes.lastname);
      AsyncStorage.setItem(storage.Username, formatRes.username);
      AsyncStorage.setItem(storage.Url, formatRes.url);
      AsyncStorage.setItem(storage.textvalue, formatRes.msg_text);
      AsyncStorage.setItem(storage.button_text, formatRes.button_text);
      Toast.show('Login Sucessful');
      action.props.navigate('Home')
    } else {
      // Alert.alert('jdjh')

    }
  } else {
    Toast.show('Please Enter Valid Username and Password')
    yield put({
      type: 'User_Login_Error',
    });
  }
}

//Register
function* doRegister(action) {
  const data = new FormData();
  data.append("username", action.Username)
  data.append("email", action.Email)
  data.append("password", action.Password)
  data.append("name", action.Name)
  data.append("lastname", action.LastName)


  const res = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('complete url', res)
  const formatRes = JSON.parse(res)
  console.log('data success from saga', formatRes)
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
//getEditProfile()
function* doGetEditProfile(action) {
  console.log('hello guru' + action)
  const response = yield call(Api.fetchDataByPOSTValue, action.url);
  console.log('Edit user detail' + response.status)
  const formatedResponse = JSON.parse(response)
  console.log('Edit user detail123' + formatedResponse.status)
  // ALert.alert('Alert', formatedResponse.status);
  console.log(action.url)
  if (formatedResponse.status == 'true') {

    AsyncStorage.setItem(storage.Email, formatedResponse.email);
    AsyncStorage.setItem(storage.Name, formatedResponse.name);
    AsyncStorage.setItem(storage.Lastname, formatedResponse.lastname);
    AsyncStorage.setItem(storage.Username, formatedResponse.username);
    yield put({
      type: 'User_Get_Edit_Profile_Success',
      payload: formatedResponse,
    });

    Toast.show(formatedResponse.message)
  } else {
    Toast.show(formatedResponse.message)
    // Alert.alert('narendra', formatedResponse.message);
    yield put({
      type: 'User_Get_Edit_Profile_Error',
    });
  }
}

//Getsubscribe
function* doGetSubScribe(action) {
  console.log('hello guru' + action.url)
  const response = yield call(Api.fetchDataByGETValue, action.url);
  console.log('Edit user detail' + response.status)
  const formatedResponse = JSON.parse(response)
  console.log('Edit user detail123' + formatedResponse)
  // ALert.alert('Alert', formatedResponse.status);
//  console.log(action.url)
  if (formatedResponse.status == 'true') {
  // Alert.alert(formatedResponse.status)
    yield put({
      type: 'User_SubScribeDetails_Success',
      payload: formatedResponse,
    });

    Toast.show(formatedResponse.message)
  } else {
    Toast.show(formatedResponse.message)
    // Alert.alert('narendra', formatedResponse.message);
    yield put({
      type: 'User_SubScribeDetails_Error',
    });
  }
}


//EditProfile
function* doEditProfile(action) {
  //Alert.alert('yeh')
  const data = new FormData()
  data.append("user_id", action.userId)
  data.append("username", action.username)
  data.append("name", action.name)
  data.append("lastname", action.lastname)
  data.append("email", action.email)
  console.log('hhjjhj' + JSON.stringify(data))
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('dit user detailE' + response)
  const formatedResponse = JSON.parse(response)
  console.log('respostex', formatedResponse);
  console.log(action.url)
  if (formatedResponse.status == 200) {
    yield put({
      type: 'User_Edit_Profile_Success',
      payload: formatedResponse.data,
    });
    Toast.show(formatedResponse.message)
  } else {
    Toast.show(formatedResponse.message)
    // Alert.alert('narendra', formatedResponse.message);
    yield put({
      type: 'User_Edit_Profile_Error',
    });
  }
}
function* doForgot(action) {
  const data = new FormData();
  data.append("email", action.Email)
  const res = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('complete url', res)
  const formatRes = JSON.parse(res)
  console.log('data success from saga', formatRes)
  if (formatRes.status == 200) {
    console.log('success');
    yield put({
      type: 'User_Forgot_Password_Success',
      payload: formatRes
    });
    Toast.show('new password setted')
  } else {
    Toast.show(formatRes.message)
    yield put({
      type: 'User_Forgot_Password_Error',
    });
  }
}

//List
function* doStain(action) {

  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response)
  console.log(action.url)
  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_Stain_Success',
      payload: formatedResponse.data,
    });
  } else {
    Alert.alert('narendra', response.message);
    yield put({
      type: 'User_Stain_Error',
    });
  }
}

//CaseStudy
function* doCaseStudy(action) {

  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response)
  console.log(action.url)
  if (formatedResponse.status == 'true') {
    console.log('yogi');
    yield put({
      type: 'User_CaseStudy_Success',
      payload: formatedResponse.data,
    });
  } else {
    Alert.alert('yogendra', response.message);
    yield put({
      type: 'User_CaseStudy_Error',
    });
  }
}

//Logout
function* doLogout(action) {

  const response = yield call(Api.fetchDataByGET, action.url);
  const formatedResponse = JSON.parse(response)
  if (formatedResponse.status == 'true') {
    yield put({
      type: 'User_Logout_Success',
      payload: formatedResponse.data,
    });
  } else {
    Alert.alert('narendra', response.message);
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
    payload: response,
  });
}
//Cha
function* doChangePassword(action) {
  const data = new FormData();
  data.append("userId", action.Id)
  data.append("Old pass", action.Old)
  data.append("New pass", action.New)
  data.append("Confirm pass", action.Confirm)

  const response = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('data success from saga', response)
  const formatedResponse = JSON.parse(response)
  console.log(action.url)
  if (formatedResponse.status == 200) {
    yield put({
      type: 'User_Change_Password_Success',
      payload: formatedResponse
    });
    Toast.show(formatedResponse.message)
  } else {
    Toast.show(formatedResponse.message);
    yield put({
      type: 'User_Change_Password_Error',
    });
  }
}
export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Stain_Request', doStain);
  yield takeEvery('User_CaseStudy_Request', doCaseStudy);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_Logout_Request', doLogout);
  yield takeEvery('User_Version_Request', doVersion);
  yield takeEvery('User_Edit_Profile_Request', doEditProfile);
  yield takeEvery('User_Forgot_Password_Request', doForgot);
  yield takeEvery('User_Change_Password_Request', doChangePassword);
  yield takeEvery('User_Get_Edit_Profile_Request', doGetEditProfile);
  yield takeEvery('User_SubScribeDetails_Request', doGetSubScribe);
}