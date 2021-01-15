import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1, marginHorizontal: 20, paddingBottom: 30
  },
  logoContainer: {
    marginTop: '5%',
    alignItems: 'center'
    , width: '99%'
  },

});