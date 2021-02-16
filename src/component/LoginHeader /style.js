import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: '90%',
  },

  header1: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconmain: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '100%',

    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModelBtntext: {
    color: colors.white,
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  ModelMsgText: {
    textDecorationLine: 'underline',

    alignSelf: 'center',
    color: '#0781de',
    fontSize: 18,
    fontWeight: '500',
    alignItems: 'center',
    padding: 6,
    textAlign: 'center',
  },
  ModelmsgView: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  popup: {
    height: 40,
    marginTop: 10,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
