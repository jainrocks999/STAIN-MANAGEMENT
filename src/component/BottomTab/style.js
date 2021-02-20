import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  bottomTab: {
    tintColor: '#fff',
    height: '100%',
    width: '100%',
    // resizeMode:'cover',
  },

  buttonText: {
    color: 'white',
    fontSize: hp('1.3%'),
    alignSelf: 'center',

    textAlign: 'center',
  },
});
