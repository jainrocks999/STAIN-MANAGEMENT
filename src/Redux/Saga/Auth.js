import {Alert} from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';

//Login
function* doLogin(action) {
  console.log("narednras",action.Username)
  const data=new FormData();
  data.append("username", action.Username)
  data.append("password", action.Password)

  const p = yield call(Api.fetchDataByPOST, action.url, data);
  console.log('data success from saga',p.data)
  if (p.status == 'true') {
    console.log('success');
    yield put({
      type: 'User_Login_Success',
      payload: p.data,
    });
  } else {
   console.log('User login error')
    yield put({
      type: 'User_Login_Error',
    });
  }
}

function* doStain(action) {
  const p = yield call(Api.fetchDataByGET, action.url);
  console.log('ccccccccccccccccccccccccccccccccccccccccccc'+JSON.stringify(p))
  if (p.status == 'true') {
   
    yield put({
      type: 'User_Stain_Success',
      payload: p.data,
    });
  } else {
    Alert.alert(p.message);
    yield put({
      type: 'User_Stain_Error',
    });
  }
}


export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Stain_Request', doStain);

}
