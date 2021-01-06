import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex:1,
  },
  scroll:{flex: 1,paddingHorizontal:30,paddingBottom:45},
  a: {
    margin:50,
    fontWeight: 'bold',
    color: 'red', // make links coloured pink
  },

});
