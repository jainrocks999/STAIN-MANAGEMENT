import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex:1,
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignSelf:'center',
    alignContent:'center'
  },
  search:{
    width:'80%',
    height:40,
    borderWidth:1,
    marginBottom:6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    backgroundColor:colors.white
  },
  scroll:{
    flex: 1,
    paddingHorizontal:30,
    marginTop: 10,
    width:'80%',
    marginLeft:24,  
   // marginBottom:50
  },


});
