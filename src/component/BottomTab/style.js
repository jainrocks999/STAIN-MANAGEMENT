import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 58,
    paddingVertical: 8,
    width: Dimensions.get('screen').width,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    width: '50%'
  },
  bottomTab: {
    tintColor: '#fff',
    height: 28,
    width: 28
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
