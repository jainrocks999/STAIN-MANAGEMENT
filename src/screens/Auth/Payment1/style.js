import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  heading: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subHeading: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.darkOrange,
  },
  SignIn: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  
  Subscriber: {
    paddingHorizontal:'3%',
    fontFamily: 'Arial',
    fontSize: 14,
    color: colors.darkOrange,
  },
  settings: {
    marginTop: '20%',
    width: '70%',
  },
  settingsContainer: {
    marginTop: '10%',

    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ACACAC',
  },
  settingsItems: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ACACAC',
  },
  settingsItemsText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkOrange,
  },
  textInputContainer: {},
  textInput: {
    marginTop: '2%',
    width: '100%',
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 12,
    color:'#5D5D5D'
  },
  checkboxContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainerView:{
    flexDirection: 'row',
   alignItems: 'center'},
checkboxContainerView1:{backgroundColor: '#fff', marginRight: 10,},

  button: {
    height: '10%',
    width: '40%',
    marginTop: '15%',
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf:"center"
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  expiry:{
    marginTop:'5%',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
  }
});
