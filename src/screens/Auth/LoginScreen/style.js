import {StyleSheet} from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  imageBackground: {
   flex:1,
  },
  modal: {
    width: '100%',
    borderRadius: 10,
    padding:10,
    justifyContent:'center',
    flexDirection:'column',
    alignSelf:'center',
    alignItems:'center',
   // flex:1,
    backgroundColor: 'white'
  },
  logoContainer: {
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{height:40,width:'100%',backgroundColor:colors.orange},
  subHeading:{
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:18,
    color:colors.darkOrange
  },
  textInputContainer:{
    padding:20,
    width:'100%'

    
  },
  textInput:{
    margin:8,
    backgroundColor:colors.white,
    padding:15,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#C9C8C7'
    

  },
  checkbox:{
    
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:14,
    padding:4
  },
  checkboxContainer:{
    marginTop:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  popup:{
    height:40,
   // width:100,
   // margin:10,
    marginTop:20,
    backgroundColor:colors.orange,
   // opacity:79,
    justifyContent:'center',
   // alignItems:'center',
    borderRadius:4,
  },
  button:{
    height:40,
    width:'40%',
    margin:15,
    backgroundColor:colors.orange,
    opacity:87,
    justifyContent:'center',
    alignItems:'center',
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
