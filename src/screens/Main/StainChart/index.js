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
import {connect} from 'react-redux';
import CustomHeader from '../../../component/MainHeader';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let Levelname = '';

class StainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: [],
      fill: [],
      button: 'STAIN CHART',
      Vlaue: '',
      // colors:'';
    };
    this.arrayholder = [];
    this.fill = [];
    this.api();
  }
  api = async () => {
    const {selector, StainPagesDetails} = this.props;

    selector.map((element) => {
      if (element.id == '1') {
      } else if (element.id == '86') {
      } else if (element.id == '2') {
      } else if (element.id == '3') {
      } else if (element.id == '84') {
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
            <Text style={{fontSize: hp('1.7%'), fontWeight: 'bold'}}>
              {item.name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      count = this.fill.length;

      if (this.fill.length > 30) {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        );
      } else if (item.tag == '') {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        );
      } else if (item.name == '') {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
            </TouchableOpacity>
          </View>
        );
      } else if (item.name == '' && item.tag != '') {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
            </TouchableOpacity>
          </View>
        );
      } else if (item.name != '' && item.tag == '') {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text
                style={{
                  fontSize: hp('1.7%'),
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}>
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: item.name,
                });
              }}>
              <Text style={{fontSize: hp('1.7%')}}>{item.tag}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  };

  render() {
    const {isFetching, StainPagesDetails} = this.props;

    return (
      <View style={styles.imageBackground}>
        <CustomHeader
          goBack={() => this.props.navigation.goBack()}
          goToNotification={() =>
            this.props.navigation.navigate('Notifications')
          }
        />
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={[styles.imageBackground, {alignItems: 'center'}]}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <TitleText
            title={'STAIN CHART'.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          <View style={styles.search}>
            <TextInput
              placeholder=""
              //value={text}
              style={{
                width: '90%',
                height: '100%',
                fontSize: hp('1.7%'),
                padding: 10,
              }}
              onChangeText={(search) => {
                this.loadsearch(search);
              }}
            />
            <View
              style={{
                width: wp('5%'),
                height: hp('2.5%'),
                marginRight: wp('1%'),
              }}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/Icons/Search.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              height: 50,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('StainChart', {
                  btnName: 'Unknown Stain',
                });
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: wp('5%'),
                    height: hp('2.5%'),
                    marginRight: wp('1%'),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Images/u.png')}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: hp('1.7%'),
                    marginTop: 4,
                    marginLeft: 4,
                    color: '#9E3B22',
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                  }}>
                  Unknown Stain
                </Text>
              </View>
            </TouchableOpacity>
            {StainPagesDetails.map((element) => {
              if (element.id == '7') {
                return (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      this.props.navigation.navigate(
                        'TipPage',
                        // , {
                        // //   btnName: 'Stain Identification Tips',
                        // // }
                      );
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: wp('5%'),
                          height: hp('2.5%'),
                          marginRight: wp('1%'),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require('../../../assets/Icons/instruction.png')}
                          style={{height: '100%', width: '100%'}}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: hp('1.7%'),
                          marginTop: 4,
                          marginLeft: 4,
                          color: '#9E3B22',
                          fontFamily: 'Arial',
                          fontWeight: 'bold',
                        }}>
                        {element.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>

          <FlatList
            style={styles.scroll}
            data={this.fill}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorComponent={itemSeparator}

            renderItem={({item}) => (
              <View style={{marginTop: 10, width: '99%'}}>
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
    StainPagesDetails: state.StainPagesDetails,
  };
};
export default connect(mapStateToProps)(StainChart);
