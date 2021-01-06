import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal:30,
    paddingBottom:80,
    flexGrow: 1,
    marginBottom:50
  },

  MainContainer: {flex: 1, width: '100%'},

  cardViewStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cardView_Image: {
    height: 190,
    resizeMode: 'stretch',
    width: '100%',
    alignSelf: 'center',
  },

  cardView_InsideText: {fontSize: 18, fontWeight: '700', fontFamily: 'Arial'},
  cardView_InsideText1: {
    fontSize: 15,
    textAlignVertical: 'center',
    fontFamily: 'Arial',
  },
});
