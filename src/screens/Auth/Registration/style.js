import { StyleSheet } from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  header: { height: 40, width: '100%', backgroundColor: colors.orange },
  imageBackground: {
    flex: 1
  },
  scroll :{
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: '10%',
    width: '100%'

  },
  textInput: {
    marginTop: 10,
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7'

  },
});
