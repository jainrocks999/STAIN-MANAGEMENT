import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  BackHandler,
  Alert
} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { useNavigation, } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import { ScrollView, Dimensions } from 'react-native';
import colors from '../../../component/colors';
import HTML from 'react-native-render-html';
import style from './style';
import Loader from '../../../component/loader';
let filtter = [];
let arrayholder = [];
const StainChart = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState()
  const selector = useSelector(state => state.StainDetails)
  const isFetching = useSelector(state => state.isFetching)
  const [button, setButton] = useState(null)
  const [chart, setChart] = useState(false)
  //const { btnName } = route.params;
  console.log(selector)
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    setButton('STAIN CHART')
    console.log('bajaj' + JSON.stringify(selector.name))

    filtter = selector.slice('About Stains', 'Watch Video', 'What is a Poultice?', 'Important Cautions', '')
    console.log('rohith' + JSON.stringify(filtter));
    selector.map(element => {
      console.log('RAHUL' + element.name)
      if (element.name == 'About Stains') {
        console.log('rohitjai' + element.name)
      } else if (element.name == 'Watch Video') {
      } else if (element.name == 'What is a Poultice?') {
      } else if (element.name == 'How to Apply a Poultice') {
      } else if (element.name == 'Important Cautions') {
      } else {
        filtter.push(element)
      }
      arrayholder = filtter;
    });
  })


  const handleBackButtonClick = () => {
    BackHandler.addEventListener('hardwareBackPress', navigation.goBack());
    return true;
  }


  const loadsearch = text => {
    console.log('rohitbt' + text)
    //setvalue(text)
    // this.setState({
    //     value: text,
    // });
    const newData = arrayholder.filter(item => {
      console.log('hdbfhdvfhv' + (item.name))
      const itemData = `${item.name}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;


    });

    filtter.push(newData)
    // this.setState({
    //     productData: newData,
    // });
  };
  // const ShowStain = () => {
  //   selector.map(element => {
  //     if (element.name == "About Stains") {
  //       setChart(false)
  //       setButton(element.name)
  //       setContent(element.content)
  //     }
  //   });
  // }

  // const ShowWhat = () => {
  //   selector.map(element => {
  //     if (element.name == "What is a Poultice?") {
  //       setChart(false)
  //       setButton(element.name)
  //       setContent(element.content)
  //     }
  //   });
  // }
  // const renderItem1 = () => {
  //   if (button == 'STAIN CHART') {
  //     return (
  //       <View style={style.search}>
  //         <TextInput
  //           placeholder=''
  //           style={{ width: '50%' }}
  //         />
  //         <Image source={require('../../../assets/Icons/Search.png')}
  //           style={{ height: 20, width: 20 }}
  //         />
  //       </View>
  //     )
  //   }
  //   else if (chart) {
  //     return (
  //       <View style={style.search}>
  //         <TextInput
  //           placeholder=''
  //           style={{ width: '50%' }}
  //         />
  //         <Image source={require('../../../assets/Icons/Search.png')}
  //           style={{ height: 20, width: 20 }}
  //         />
  //       </View>
  //     )
  //   }

  // }
  const renderItem = () => {
    console.log('mummy ji' + JSON.stringify(filtter))
    return (
      filtter.map(element => {
        console.log('ram' + element.name)
        return (
          <View style={{marginTop:10}}>

            <Text style={{ fontSize: 15 }}>{element.name.toUpperCase()}</Text>

          </View>
        )
      }
      )
    )

    // else {

    //   return (
    //     <HTML
    //       html={contents}
    //       imagesMaxWidth={Dimensions.get('window').width}
    //     />
    //   );

  }

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <Text
          style={style.headerText}>
          STAIN CHART
        </Text>
        <View style={style.search}>
          <TextInput
            placeholder=''
            style={{ width: '50%' }}
            onChangeText={search => {
              loadsearch(search)
            }}
          />
          <Image source={require('../../../assets/Icons/Search.png')}
            style={{ height: 20, width: 20 }}
          />
        </View>
        <ScrollView
         // showsVerticalScrollIndicator={false}
          style={style.scroll}>
          {renderItem()}
        </ScrollView>
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

export default StainChart

