import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5, 
    borderColor: '#C1C1C1', 
    fontFamily:'Arial',
    fontWeight:'bold',
    width: '90%'},

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconmain: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
