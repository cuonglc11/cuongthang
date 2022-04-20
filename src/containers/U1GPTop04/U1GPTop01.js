import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import {icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import TextInputCustomComponent from '../../components/TextInputCustomComponent';
import ModalDropdownComponent from '../../components/ModalDropdownComponent';
import commonStyle from '../../resource/styles/commonStyles';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import common from '../../utils/common';
import information from '../../constants/information';
import {Dimensions} from 'react-native';



function U1GPTop01(props) {
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const FAKEBUMON = [
    {bumon: 'OO', id: 1},
    {bumon: 'AA', id: 2},
    {bumon: 'BB', id: 3},
    {bumon: 'CC', id: 4},
    {bumon: 'DD', id: 5},
    {bumon: 'EE', id: 6},
    {bumon: 'GG', id: 7},
  ];
  const FAKEDATA = [
    {image: images.bykeImage, id: 1},
    {image: images.bykeImage, id: 2},
    {image: images.bykeImage, id: 3},
    {image: images.bykeImage, id: 4},
    {image: images.bykeImage, id: 5},
    {image: images.bykeImage, id: 6},
    {image: images.bykeImage, id: 7},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
    {image: images.bykeImage, id: 8},
  ];
  const [bumon, setBumon] = useState(FAKEBUMON);
  const [fakeDatas, setFakeData] = useState(FAKEDATA);

  return (
    <SafeAreaView style={{flex: 100, flexDirection: 'column',position: 'relative'}}>
      <View style={{flex: 100, flexDirection: 'column'}}>
        <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: colors.borderColor,
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: 45,
              
            }}>

            <TextInput
              returnKeyType="done"
              placeholderTextColor={'#969696'}

              placeholder=""
              style={{
                width: '75%',
                paddingLeft: 10,
                color: 'black',
              }}
            />
            <TouchableOpacity
              onPress={()=>{
                alert('press')
              }}
              style={{
                width: '20%',
                height:40,
                backgroundColor: '#969696',
                borderRadius: 5,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.white}}>検索</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 5, height: 70}}>
          <FlatList
            horizontal
            data={bumon}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  height: 56,
                  width: 90,
                  borderColor: 'rgb(143,191,11)',
                  borderWidth: 1,
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'rgb(143,191,11)', fontSize: 16}}>
                  {item.bumon}
                </Text>
                <Text style={{color: 'rgb(143,191,11)'}}>部門</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <FlatList
            numColumns={3}
            data={fakeDatas}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{width: windowWidth / 3, height: 70, marginBottom: 2,position:'relative'}}>
                <Image
                  resizeMode="contain"
                  style={{maxWidth: '100%', maxHeight: '100%'}}
                  source={item.image}
                />
                <View style={{position:'absolute',bottom:0,left:0,backgroundColor:'white',flexDirection:'row'}}>
                    <Image source={icons.like} style={{width:20,height:20,marginEnd:10}}></Image>
                    <Text style={{color:'black'}}>271</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        // onPress={() => {
        //   dispatch(navigateAction({name: 'RegisterToCompete03'}));
        // }}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 100,
          height: 100,
          borderRadius: 80,
          backgroundColor: 'rgb(255,147,0)',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Text style={{color:'white'}}>登録権</Text>
        <Text style={{color:'white'}}>残り3</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default U1GPTop01;
