import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
flex:1
  },
  logoContainer: {
    marginTop:'5%',
    alignItems:'center'
  },
  SignIn: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,   
  },
  textInputContainer:{
    marginTop:10,  
    width:'100%' 
  },
  textInput:{
    marginBottom:10,
    backgroundColor:colors.white,
    padding:15,
    borderWidth:1,
    width:'99%',
    borderRadius:4,
    borderColor:'#C9C8C7'
  },
  checkbox:{    
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:14,
    marginTop:10,
    paddingHorizontal:20
  },
 
});
