import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  // header: {
  //   height: 40,
  //   width: wp('100%'),
  //   backgroundColor: colors.orange
  // },
  iconmain: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: hp('100%'),
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
