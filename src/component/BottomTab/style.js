import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 58,
    paddingVertical: 8,
    width:'100%',
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    width: '50%'
  },
  bottomTab: {
    tintColor: '#fff',
    height: 26,
    width: 26,
    resizeMode:'cover',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    alignSelf: 'center',
    //fontFamily: 'Arial',
    width:90,
    padding:4,
    textAlign: 'center'
  },
});
