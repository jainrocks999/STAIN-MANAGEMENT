import {StyleSheet} from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
      flexDirection:'row',
    height: '6%',
    width: '100%',
    backgroundColor: colors.orange,
    justifyContent: 'flex-end',
    alignItems:'center',
    paddingRight:10
  },
  itemSeperator:{borderBottomWidth:0.5,borderColor:'#C1C1C1',width:'50%'},
});
