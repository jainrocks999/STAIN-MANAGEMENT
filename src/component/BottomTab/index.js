import React, {useEffect} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

function BottomTab() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{width: 40, height: 40, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image 
          source={require('../../assets/Icons/home.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>HOME</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={{width: 40, height: 40, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('VideoList');
        }}>
        <Image
          source={require('../../assets/Icons1/Video.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>VIDEO</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={{width: 40, height: 40, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('AboutStains');
        }}>
        <Image
          source={require('../../assets/Icons1/About.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>ABOUT STAINS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{width: 40, height: 40, alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('HowTo');
        }}>
        <Image
          source={require('../../assets/Icons1/HowTo.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>HOW TO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{width: 38, height: 38, alignItems: 'center',}}
        onPress={() => {
          navigation.navigate('Stain');
        }}>
        <Image
          source={require('../../assets/Icons1/Stain_Chart.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>STAIN CHART</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomTab;
