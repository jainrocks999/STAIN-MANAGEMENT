import {StyleSheet} from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  imageBackground: {
  flex:1, 
    width:'100%',
    height:'100%',
    alignItems: 'center',
    
  },
  logoContainer: {
    marginTop:'8%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  heading:{
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
  button:{
    height:'7%',
    width:'40%',
    marginTop:'3%',
    backgroundColor:colors.orange,
    opacity:87,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    borderWidth:2,
    borderColor:colors.white
  },
  buttonText:{
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
