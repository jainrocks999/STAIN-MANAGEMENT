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
  BackHandler
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

const SupportScreen = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState()
  const selector = useSelector(state => state.StainDetails)
  const CaseStudy = useSelector(state => state.CaseStudyDetails)
  const isFetching = useSelector(state => state.isFetching)
  const [button, setButton] = useState(null)
  const [chart, setChart] = useState(false)
  const { btnName } = route.params;
  console.log(selector)
  console.log(CaseStudy)
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    setButton(btnName)
    console.log('rohit' + selector)
    console.log('Case Study : ' + CaseStudy)
    const selectedName = selector.map(element => {
      if (element.name == btnName) {
        console.log('element : ', element.name);
        setChart(false)
        setContent(element.content)
      }
    });

    // const selectedName1 = CaseStudy.map(element => {
    //   return (
    //     <View>
    //       <TouchableOpacity
    //         // onPress={() => {
    //         //   navigation.navigate('StainChart', {
    //         //     btnName: element.case_study_name,
    //         //   });
    //         // }}
    //         style={{ margin: 5 }}
    //       >
    //         <Text style={{ fontSize: 15 }}>{element.case_study_name}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // })



  })

  const handleBackButtonClick = () => {
    BackHandler.addEventListener('hardwareBackPress', navigation.navigate('Home'));
    return true;
  }
  const ShowStain = () => {
    selector.map(element => {
      if (element.name == "About Stains") {
        setChart(false)
        setButton(element.name)
        setContent(element.content)
      }
    });
  }

  const ShowWhat = () => {
    selector.map(element => {
      if (element.name == "What is a Poultice?") {
        setChart(false)
        setButton(element.name)
        setContent(element.content)
      }
    });
  }
  const renderItem1 = () => {
    if (button == 'STAIN CHART') {
      return (
        <View style={style.search}>
          <TextInput
            placeholder=''
            style={{ width: '50%' }}
          />
          <Image source={require('../../../assets/Icons/Search.png')}
            style={{ height: 20, width: 20 }}
          />
        </View>
      )
    }
    else if (chart) {
      return (
        <View style={style.search}>
          <TextInput
            placeholder=''
            style={{ width: '50%' }}
          />
          <Image source={require('../../../assets/Icons/Search.png')}
            style={{ height: 20, width: 20 }}
          />
        </View>
      )
    }

  }
  const renderItem = () => {

    if (button == 'STAIN CHART') {

      return (
        selector.map(element => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StainChart', {
                    btnName: element.name,
                  });
                }}
                style={{ margin: 5 }}
              >
                <Text style={{ fontSize: 15 }}>{element.name}</Text>
              </TouchableOpacity>
            </View>
          )
        }
        )
      )
    }
    else if (chart) {
      return (
        selector.map(element => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StainChart', {
                    btnName: element.name,
                  });
                }}
                style={{ margin: 5 }}
              >
                <Text style={{ fontSize: 15 }}>{element.name}</Text>
              </TouchableOpacity>
            </View>
          )
        }
        )
      )
    }
    else {

      return (
        <HTML
          html={contents}
          imagesMaxWidth={Dimensions.get('window').width}
        />
      );
    };
  }

  const renderCaseStudies = () => {
    if (button == 'Case Studies') {
      return (
        CaseStudy.map(element => {
          return (
            <View>


              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{element.case_study_name}</Text>
              <Text style={{ fontSize: 14 }}>{element.case_study_content}</Text>


            </View>
          )
        }
        )
      )
    }

  };


  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <Text
          style={style.headerText}>
          {chart == true ? 'STAIN CHART' : button}
        </Text>
        {renderItem1()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scroll}>
          {renderCaseStudies()}
          {renderItem()}
        </ScrollView>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      <BottomTab
        goToAboutStain={ShowStain}
        goToWhatIs={ShowWhat}
        goToStainChart={() => setChart(true)}
      />
    </View>
  );
};

export default SupportScreen

