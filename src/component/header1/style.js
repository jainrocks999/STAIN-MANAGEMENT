import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5, 
    borderColor: '#C1C1C1', 
    width: '50%'},

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconmain: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 21,
    height: 21,
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
