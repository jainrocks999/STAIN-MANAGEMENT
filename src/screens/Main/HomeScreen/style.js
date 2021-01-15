import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll:{  flexGrow: 1,
    // justifyContent: 'center',
     padding: 20,},
  logoContainer: {
  //  marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'white'
  },
  SecondView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
   // width:300
    
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
  logoContainer1: {
      marginTop: '10%',
      justifyContent: 'center',
      alignItems: 'center',
     // alignSelf: 'baseline',
      // backgroundColor:'white'
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

  heading: {
    textAlign: 'center',
    color: colors.darkOrange,
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.darkOrange,
    fontSize: 17,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center', 
    marginVertical: 20,
    alignContent:'center'
  },

  button: {
    height: 50,
    width: '50%',
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.white,
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: 28,
    width: 38,
    padding: 10,
    tintColor: colors.white,
  },
});
