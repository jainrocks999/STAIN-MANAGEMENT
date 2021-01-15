import { StyleSheet } from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  header: { height: 40, width: '100%', backgroundColor: colors.orange },
  MainView: {
    flex: 1,
  },
  logoContainer1: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'white'
  },
  scroll: {
    flexGrow: 1,
   // justifyContent: 'center',
    padding: 20,
  },
  ViewMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    width: '88%',
    marginTop:-10,
  },
  SecondView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
   // width:300
    
  },
  ModelBtntext: {
    color: colors.white,
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  ModelMsgText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    alignItems: 'center',
    padding: 6,
    textAlign: 'center'
  },
  ModelmsgView: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    padding: 20,
    width: '100%'
  },
  textInput: {
    margin: 8,
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7'
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: '400',
    fontSize: 12,
    alignSelf:'center',
    marginTop:-4,
  },
  logoContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
   // width: '100%',
  },
  modal: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  popup: {
    height: 40,
    marginTop: 20,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo:{
    width:65,
    height:65,
    //borderRadius:10,
    marginTop:12,
    padding:10,
    justifyContent:'center',
    alignContent:'center'
  },
  logo1:{
    width:220,
    height:30,
    borderRadius:10,
    marginTop:10,
    justifyContent:'center',
    alignContent:'center',
    resizeMode:'center'
  },

});
