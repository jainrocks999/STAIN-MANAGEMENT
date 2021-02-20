import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 45,
  },
  a: {
    margin: 50,
    fontWeight: 'bold',
    color: 'red', // make links coloured pink
  },
  modal: {
    width: wp('100%'),
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModelBtntext: {
    color: 'white',
    width: 32,
    height: 32,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 6,
  },
  popup: {
    // height: 40,
    // width:30,
    // height:30,
    // marginTop: 20,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
