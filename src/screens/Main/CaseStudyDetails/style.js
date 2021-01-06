import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex:1,
  },
  scroll:{ flexGrow: 1, justifyContent: 'center', marginHorizontal: 20, paddingBottom: 30 },
  view1:{
    flex: 1, width: '100%', shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
},
view2:{ width: '100%', marginVertical: 20 },
case_study_name:{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Arial', marginBottom: 5 },
case_study_content:{ fontSize: 14, fontFamily: 'Arial', },
  


});
