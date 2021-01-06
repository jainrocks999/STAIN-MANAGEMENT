import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll:{ flexGrow: 1, justifyContent: 'center', },
  logoContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  heading: {
    textAlign: 'center',
    color: colors.darkOrange,
    fontSize: 29,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.darkOrange,
    fontSize: 17,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {justifyContent: 'center', marginVertical: 40},

  button: {
    height: 50,
    width: '50%',
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.white,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.white,
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: 28,
    width: 38,
    padding: 10,
    tintColor: colors.white,
  },
});
