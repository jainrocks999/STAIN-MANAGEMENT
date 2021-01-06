import { StyleSheet } from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    flex: 1
  },
  logoContainer: {
    padding: 20,
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  textInputContainer: {
    padding: 20,
    width: '100%'
  },
  textInput: {
    marginTop: '5%',
    width: '100%',
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },

});
