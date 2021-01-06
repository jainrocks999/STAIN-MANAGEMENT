import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { useNavigation, } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import HTMLView from 'react-native-htmlview';
import Loader from '../../../component/loader';
import TitleText from '../../../component/TitleText';
import StatusBar from '../../../component/StatusBar';

let images = '';
const SupportScreen = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState()
  const selector = useSelector(state => state.StainDetails)
  const CaseStudy = useSelector(state => state.CaseStudyDetails)
  const isFetching = useSelector(state => state.isFetching)
  const [button, setButton] = useState(null)
  const [chart, setChart] = useState(false)
  const { btnName } = route.params;
  let buttonName = '';
  buttonName = btnName
  useEffect(() => {

    setButton(buttonName)
    const selectedName = selector.map(element => {

      if (element.name == btnName) {
        setChart(false)
        setContent(element.mobile_content)
      }
    });


  })


  const renderCaseStudies = () => {

    if (button == 'Case Studies') {
      return (
        CaseStudy.map(element => {
          let imageArray = [];
          images = element.images;
          imageArray.push(images);
          return (
            <View style={styles.MainContainer} >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CaseStudyDetails', {
                    elementdata: element
                  });
                }}
                style={{ margin: 5 }}
              >
                <View
                  style={styles.cardViewStyle}>

                  <Image
                    source={{ uri: element.single_image }}
                    style={styles.cardView_Image}

                  />
                  <View style={{ alignSelf: 'flex-start', marginTop: 8 }} >
                    <Text style={styles.cardView_InsideText}>{element.case_study_name}</Text>
                  </View>
                  <View style={{ alignSelf: 'flex-start', marginTop: 1, marginBottom: 15 }} >
                    <Text style={styles.cardView_InsideText1}>{element.short_description}</Text>
                  </View>

                </View>


              </TouchableOpacity>
            </View>
          )
        }
        )
      )
    }
    else

      return (
        <HTMLView
          value={contents}
        />
      )

  };


  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>

        <ScrollView contentContainerStyle={styles.scroll}>

          <TitleText title={buttonName.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          {renderCaseStudies()}
         
        </ScrollView>
      </ImageBackground>
      <StatusBar />
      <BottomTab />
    </View>
  );
};

export default SupportScreen;