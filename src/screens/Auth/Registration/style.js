import {StyleSheet} from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  imageBackground: {
   flex:1
  },
  logoContainer: {
    marginTop:'40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{height:40,width:'100%',backgroundColor:colors.orange},
  SignIn: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  

  subHeading:{
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:16,
    color:colors.darkOrange
  },
  textInputContainer:{
    marginTop:'10%',
    width:'100%'
    
  },
  textInput:{
    marginTop:10,
    backgroundColor:colors.white,
    padding:15,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#C9C8C7'

  },
  checkbox:{
    
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:12,
  },
  checkboxContainer:{
    marginTop:'10%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    width:'40%',
  },
  
  button:{
    height:40,
    width:'40%',
    marginTop:'10%',
    backgroundColor:colors.orange,
    opacity:87,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:4,
  },
  buttonText:{
    color:colors.white,
    fontSize:12,
    alignSelf:'center',
    fontFamily:'Arial',
    fontWeight:'bold',
    textAlign:'center'
  },
});
