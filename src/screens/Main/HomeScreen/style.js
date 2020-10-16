import {StyleSheet} from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  imageBackground: {
  flex:1, 
    alignItems: 'center',
    
  },
  logoContainer: {
    marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
  heading:{
    textAlign:'center',
    color:colors.darkOrange,
    fontSize:29,
    fontFamily:'Arial',
    fontWeight:'bold'
  },
  subHeading:{
    color:colors.darkOrange,
    fontSize:17,
    fontFamily:'Arial',
    fontWeight:'bold',
    textAlign:'center'
  },
  button:{height:'12%',
width:200,
    marginTop:'3%',
    backgroundColor:colors.orange,
    opacity:87,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    alignContent:'center',
    borderRadius:4,
    borderWidth:2,
    borderColor:colors.white
  },
  buttonText:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    alignContent:'center',
    color:colors.white,
    fontSize:15,
    alignSelf:'center',
    fontFamily:'Arial',
    fontWeight:'bold',
    textAlign:'center'
  },
  icon:{
    height:'100%',
    width:'25%',
    tintColor:colors.white
  }
});
