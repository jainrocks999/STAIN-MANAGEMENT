import { StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: '6%',
    //width: '100%',
    backgroundColor: colors.orange,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10
  },
  itemSeperator: { borderBottomWidth: 0.5, borderColor: '#C1C1C1', width: '50%' },

  header1: {
    flexDirection: 'row',
    height: '6%',
    width: '100%',
    backgroundColor: colors.orange,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  iconmain: {
    width: 30, height: 30, justifyContent: 'center'
  },
  icon: {
    marginLeft: 10,
    width: 21,
    height: 21,
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  }
});
