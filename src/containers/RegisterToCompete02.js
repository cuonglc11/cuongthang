import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import stylesRegisterCompete02 from '../resource/styles/registerCompete02Style';
import colors from '../constants/colors';
import ProgressiveImage from '../components/ProgressiveImage';
import ButtonCustomComponent from '../components/ButtonCustomComponent';
import constant from '../constants/constant';
import {navigateAction} from "../actions/navigationActions";
import {useDispatch} from "react-redux";

function RegisterToCompete02({route}) {
  const {albumImage} = route?.params;
  const dispatch = useDispatch();

  const renderAddImage = (key) => {
    console.log(albumImage[key]?.img?.uri)
    return (
      <View
        style={{ width: constant.WIDTH / 4, height: constant.WIDTH / 4, alignItems: 'center', justifyContent: 'center'}}>
        <ProgressiveImage
          thumbnailStyle={{width: '100%', height: '100%'}}
          source={{uri: albumImage[key]?.img?.uri}}
          containerStyle={{width: '100%', height: '100%'}}
        />
      </View>
    )
  };

  return (
    <SafeAreaView style={stylesRegisterCompete02.container}>
      <View
        style={{alignItems: 'center', flex: 1, backgroundColor: colors.white}}
      >
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 19 : 14,
              fontWeight: 'bold',
              color: colors.colorPageText,
            }}
          >
            参戦するバイクのことを教えてください
          </Text>
        </View>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: constant.HEIGHT > 700 ? constant.HEIGHT / 3 : constant.HEIGHT / 3.5,
            }}
          >
            <ProgressiveImage
              thumbnailStyle={{width: '100%', height: '100%'}}
              source={{uri: albumImage['imageCommon']?.img?.uri}}
              containerStyle={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            { renderAddImage('imageOne')}
            { renderAddImage('imageTwo')}
            { renderAddImage('imageThree')}
            { renderAddImage('imageFour')}
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            { renderAddImage('imageOtherOne')}
            { renderAddImage('imageOtherTwo')}
            { renderAddImage('imageOtherThree')}
            { renderAddImage('imageOtherFour')}
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingBottom: 10,
            backgroundColor: colors.white,
          }}
        >
          <ButtonCustomComponent
            label={'次へ'}
            customStyle={{
              backgroundColor: colors.btnNext,
              width: constant.WIDTH / 3,
              alignSelf: 'center',
            }}
            customStyleText={{
              fontSize: constant.HEIGHT > 700 ? 24 : 14,
              paddingVertical: Platform.OS === 'ios' ? 5 : 0,
            }}
            onPress={() => {
              dispatch(navigateAction({name: 'RegisterToCompete03'}));
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete02;
