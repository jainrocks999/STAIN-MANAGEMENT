import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: hp('5%'),
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: '90%',
  },

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconmain: {
    width: wp('8%'),
    height: hp('15%'),
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
