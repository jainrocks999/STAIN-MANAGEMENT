import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  // header: {
  //   height: 40,
  //   width: '100%',
  //   backgroundColor: colors.orange
  // },
  iconmain: {
    width: 35,
    height: 35,
   justifyContent: 'center',
   alignItems: 'center',
 },
 icon: {
   width:'100%',
   height: '100%',
   tintColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
 },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
