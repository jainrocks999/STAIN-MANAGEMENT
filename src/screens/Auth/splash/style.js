import { StyleSheet } from 'react-native';
import colors from '../../../component/colors'
export default StyleSheet.create({
  MainView: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
