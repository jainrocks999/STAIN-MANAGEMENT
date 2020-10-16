import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
      flexDirection:'row',
      height:48,
      paddingVertical:10,
  width: Dimensions.get('screen').width,
    backgroundColor: colors.orange,
    alignItems:'center',
    justifyContent:'space-evenly'
    
  },
  itemSeperator:{borderBottomWidth:0.5,borderColor:'#C1C1C1',width:'50%'},
  
});
