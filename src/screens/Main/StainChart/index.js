import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Modal,
  BackHandler,
  FlatList,
  Alert
} from 'react-native';
import style from './style';
import BottomTab from '../../../component/BottomTab';
import { connect } from 'react-redux';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import storage from '../../../component/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../component/loader';

let filtter = [];
// //let arrayholder = [];
class StainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: [],
      fill:[],
      button: 'STAIN CHART',

    };
    this.arrayholder = [];
    this.fill=[];
    this.api();
  }
  api = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    const { selector } = this.props;
    console.log('yadav' + JSON.stringify(selector))
    //setButton('STAIN CHART')
    selector.map(element => {
      console.log('RAHUL' + element.name)
      if (element.name == 'About Stains') {
        //console.log('rohitjai' + element.name)
      } else if (element.name == 'Watch Video') {
      } else if (element.name == 'What is a Poultice?') {
      } else if (element.name == 'How to Apply a Poultice') {
      } else if (element.name == 'Important Cautions') {
      } else {
        console.log('Rohit' + JSON.stringify(element))
       this.fill.push(element)
        // this.setState({
        // data:filtter
        // })
      }
     // console.log('filtter', filtter);
      // setData(filtter)
      this.arrayholder = selector;
    });
  // BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

  }
  // const navigation = useNavigation();
  // const [contents, setContent] = useState()
  // const [value, setvalue] = useState('');
  // const selector = useSelector(state => state.StainDetails)
  // const isFetching = useSelector(state => state.isFetching)
  // const [button, setButton] = useState(null)


  // const [arrayholder, setArrayholder] = useState([])
  // const [text, setText] = useState('')
  // const [data, setData] = useState([])
  // useEffect(() => {
  // // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  // //const filtter = [];
  //

   handleBackButtonClick = () => {
  BackHandler.addEventListener('hardwareBackPress', this.props.navigation.goBack(null));
  return true;
  }


  loadsearch = (text) => {
    this.setState({
      value:text
    })
    console.log('arrayholder1 :', this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      console.log('rohit jj' + item.name)
      console.log('rohit jjww' + text)
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
    //  console.log('rohit jah' + (itemData.indexOf(textData) > -1))
    //  console.log('rohit jah' + (itemData.indexOf(textData) > -1))
      return itemData.indexOf(textData) > -1

    });
    console.log('gg'+JSON.stringify(newData))

    // this.setState({
    // filter:newData
    // })
//filtter = newData
    this.fill = (newData);
    console.log('tttttt'+JSON.stringify(this.fill))
    //filtter==newData;

    // setData(newData)
    //setText(,text)
  }

  render() {
    console.log('filter:', +this.fill);
    // const {data} =this.state;
    const { isFetching } = this.props;
    //console.log('kapil123'+JSON.stringify(selector))
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={style.imageBackground}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <Text
            style={style.headerText}>
            STAIN CHART
</Text>
          <View style={style.search}>
            <TextInput
              placeholder=''
              //value={text}
              style={{ width: '50%' }}
              onChangeText={search => {
                this.loadsearch(search)
              }}
            />
            <Image source={require('../../../assets/Icons/Search.png')}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <FlatList

            data={this.fill}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) =>
              <View style={{ marginTop: 10,width:'99%' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('StainChart', {
                      btnName: item.name,
                    });
                  }}>
                  <Text style={{ fontSize: 15 }}>{item.name}</Text>
                </TouchableOpacity>
              </View>}
            style={{ marginTop: 10,width:'80%',marginLeft:24 }} />
        </ImageBackground>
        <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
        <BottomTab
        // goToAboutStain={ShowStain}
        // goToWhatIs={ShowWhat}
        // goToStainChart={() => setChart(true)}
        />
      </View>
    );
  };
}
const mapStateToProps = state => {
  console.log('rorooror' + JSON.stringify(state))
  return {
    isFetching: state.isFetching,
    selector: state.StainDetails,

  };
};
export default connect(mapStateToProps)(StainChart);