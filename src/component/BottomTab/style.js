import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 68,
    paddingVertical: 8,
    width:'100%',
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf:'center',
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
  bottomTab1: {
    tintColor: '#fff',
    height: 36,
    width: 36,
   // resizeMode:'cover',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    alignSelf: 'center',
    //fontFamily: 'Arial',
   // width:90,
    padding:4,
    textAlign: 'center'
  },
});
