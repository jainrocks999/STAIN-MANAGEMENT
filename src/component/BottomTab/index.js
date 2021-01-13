import React, { useEffect } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

function BottomTab() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>

      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../../assets/Icons/home.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        onPress={() => {
          navigation.navigate('Stain');
        }}>
        <Image
          source={require('../../assets/Icons1/Stain_Chart.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <View style={{ width: 60 }}>
          <Text style={styles.buttonText}>Stain Chart</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        onPress={() => {
          // navigation.navigate('HowTo');
          navigation.navigate('VideoList');
        }}>
        <Image
          //source={require('../../assets/Icons1/HowTo.png')}
          source={require('../../assets/Icons1/Video.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <View style={{ width: 60 }}>
          <Text numberOfLines={3} style={styles.buttonText}>How To</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        onPress={() => {
          // navigation.navigate('VideoList');
          navigation.navigate('resource');
        }}>
        <Image
          source={require('../../assets/Images/RS.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <View style={{ width: 60 }}>
          <Text
            numberOfLines={2} style={styles.buttonText}>Supplies & Resources</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        // onPress={() => {
        //   navigation.navigate('AboutStains');
        // }}
        onPress={() => {
          navigation.navigate('Support', {
            btnName: 'Case Studies',
          });
        }}
        >
        <Image
          source={require('../../assets/Images/cs.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <View style={{ width: 60 }}>
          <Text
            numberOfLines={2} style={styles.buttonText}>Case Studies</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ width: 40, height: 40, alignItems: 'center', marginBottom: 10 }}
        onPress={() => {
          navigation.navigate('AboutStains');
        }}>
        <Image
          source={require('../../assets/Icons1/About.png')}
          style={styles.bottomTab}
          resizeMode="center"
        />
        <View style={{ width: 60 }}>
          <Text
            numberOfLines={2} style={styles.buttonText}>About Stains</Text>
        </View>

      </TouchableOpacity>




    </View>
  );
}

export default BottomTab;
