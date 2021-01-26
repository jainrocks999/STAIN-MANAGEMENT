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
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import HTMLView from 'react-native-htmlview';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import YouTubePlayer from 'react-native-youtube-sdk';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { WebView } from 'react-native-webview';


let images = '';
const SupportScreen = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState()
  const selector = useSelector(state => state.StainDetails)
  const CaseStudy = useSelector(state => state.CaseStudyDetails)
  console.log('narendara video check',CaseStudy)
  const isFetching = useSelector(state => state.isFetching)
  const [button, setButton] = useState(null)
  const [chart, setChart] = useState(false)
  const [showPlayIcon,setShowPlayIcon]=useState(true)
  //const { btnName } = route.params;
  let buttonName = 'Case Studies';
//  buttonName = btnName
  useEffect(() => {

    setButton(buttonName)
    const selectedName = selector.map(element => {

      if (element.name == buttonName) {
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
          console.log('cheking',element.video_url)
          return (
            <View style={styles.MainContainer} >
              <View>
                <View
                  style={styles.cardViewStyle}>
                  {/* <Image
                    source={{ uri: element.single_image }}
                    style={styles.cardView_Image}
                  /> */}           
                      {/* <Video 
                      source={{uri: element.video_url}}
                      controls
                      paused
                      muted
                      style={{ width: "100%", height: 200 }}
                      /> */}
                      <View
                       style={{ width: "100%", height: 200 }}
                      >
                       {/* <VideoPlayer
                        pauseOnPress
                        autoplay={true}
                        videoWidth={1600}
                        videoHeight={900}
                        onPlayPress={() => {
                          setShowPlayIcon(false);
                        }}
                        //'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                        video={{ uri: element.video_url }}
                        /> */}
                        <WebView source={{ uri: element.video_url }} />
                        </View>
                  <View style={{ alignSelf: 'flex-start', marginTop: 8 }} >
                    <Text style={styles.cardView_InsideText}>{element.case_study_name}</Text>
                  </View>
                  <View style={{ alignSelf: 'flex-start', marginTop: 1, marginBottom: 15 }} >
                    <Text style={styles.cardView_InsideText1}>{element.short_description}</Text>
                  </View>
                </View>
              </View>
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
      <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
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