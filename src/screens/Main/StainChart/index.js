import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,

  ImageBackground,
  TextInput,

  FlatList,

} from 'react-native';
import styles from './style';
import BottomTab from '../../../component/BottomTab';
import { connect } from 'react-redux';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';

import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';


let count = '';

class StainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: [],
      fill: [],
      button: 'STAIN CHART',
      // colors:'';
    };
    this.arrayholder = [];
    this.fill = [];
    this.api();
  }
  api = async () => {
    const { selector } = this.props;

    selector.map((element) => {

      if (element.name == 'About Stains') {
      } else if (element.name == 'Watch Video') {
      } else if (element.name == 'What is a Poultice?') {
      } else if (element.name == 'How to Apply a Poultice') {
      } else if (element.name == 'Important Cautions') {
      } else {
        this.fill.push(element);
      }
      this.arrayholder = this.fill;
    });
  };

  loadsearch = (text) => {
    this.setState({
      value: text,
      colors: 'Black',
    });
    const newData = this.arrayholder.filter((item) => {

      const itemData = `${item.name.toUpperCase()}"/n"   
        ${item.tag.toUpperCase()} `;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.fill = newData;

    if (newData == '') {
      Toast.show('No item found');

    }
  };

  renderItem = (item) => {

    if (item.name == 'IMPORTANT') {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', }}>
              {item.name.toUpperCase()}

            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    else {
      count = this.fill.length;

      if (this.fill.length > 30) {



        return <View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      }
      else if (item.tag == '') {


        return <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>

            <Text style={{ fontSize: 15 }}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      }

      else if (item.name == '') {


        return <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.tag.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      }

      else if (item.name == '' && item.tag != '') {


        return <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.tag.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      }

      else if (item.name != '' && item.tag == '') {

        return <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      }

      else {

        return <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.tag.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StainChart', {
                btnName: item.name,
              });
            }}>
            <Text style={{ fontSize: 15 }}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

      }

    }

  };

  render() {
    const { isFetching } = this.props;

    return (
      <View style={styles.imageBackground}>
        <CustomHeader />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <TitleText title={'STAIN CHART'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          <View style={styles.search}>
            <TextInput
              placeholder=""
              //value={text}
              style={{ width: '90%', padding: 7 }}
              onChangeText={(search) => {
                this.loadsearch(search);
              }}
            />
            <Image
              source={require('../../../assets/Icons/Search.png')}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '85%', height: 50, justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: 'Unknown Stain',
                });
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 10 }}>
                <Image
                  source={require('../../../assets/Images/u.png')}
                  style={{ height: 30, width: 20, resizeMode: 'center' }}

                />
                <Text style={{
                  fontSize: 14, marginTop: 4, marginLeft: 4, color: '#9E3B22', fontFamily: 'Arial',
                  fontWeight: 'bold',
                }}>
                  Unknown Stain
           </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                 this.props.navigation.navigate('TipPage'
                // , {
                // //   btnName: 'Stain Identification Tips',
                // // }
                 );
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 10 }}>
                <Image
                  source={require('../../../assets/Images/t.png')}
                  style={{ height: 30, width: 20, resizeMode: 'center' }}
                />
                <Text style={{
                  fontSize: 14, marginTop: 4, marginLeft: 4, color: '#9E3B22', fontFamily: 'Arial',
                  fontWeight: 'bold',
                }}>
                  Stain Identification Tips
           </Text>
              </View>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.scroll}
            data={this.fill}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorComponent={itemSeparator}

            renderItem={({ item }) => (
              <View style={{ marginTop: 10, width: '99%' }}>


                {this.renderItem(item)}

              </View>
            )}
          />
          <BottomTab />
        </ImageBackground>
        <StatusBar
          backgroundColor={colors.darkOrange}
          barStyle="light-content"
        />

      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    selector: state.StainDetails,
  };
};
export default connect(mapStateToProps)(StainChart);
