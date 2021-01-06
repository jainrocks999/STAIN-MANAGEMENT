import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/header1';
import {useNavigation} from '@react-navigation/native';
import HTML from 'react-native-htmlview';
import YouTubePlayer from 'react-native-youtube-sdk';
import styles from './style';
import colors from '../../../component/colors';
import StatusBar from '../../../component/StatusBar';
const Video = ({route}) => {
  const {elementdata} = route.params;

  let videoId = elementdata.video_iframe_code.slice(30);
  useEffect(() => {});

  const play = () => {
    player.playVideo();
  };
 


  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <YouTubePlayer
            //ref={ref => (this.youTubePlayer = ref)}
            videoId={videoId}
            autoPlay={true}
            fullscreen={false}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={5}
            style={styles.video}
            onStart={() => play}
            
          />

          <View style={{padding: 10}}>
            <Text style={styles.video_name}>{elementdata.video_name}</Text>
            <HTML
              value={elementdata.video_content}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
    </View>
  );
};

export default connect()(Video);
