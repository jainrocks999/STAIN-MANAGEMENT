import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  heading: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  subHeading: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.darkOrange,
  },
  settingsText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  settings: {
  
    marginTop: '25%',
    width: '70%',
  },
  settingsContainer: {
  
    marginTop: '10%',
    
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor: '#ACACAC',
  },
  settingsItems: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor: '#ACACAC',
  },
  settingsItemsText:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkOrange,
  },
  textInput: {
    marginTop: '5%',
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkboxContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
  },

  button: {
    height: '7%',
    width: '40%',
    marginTop: '15%',
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
