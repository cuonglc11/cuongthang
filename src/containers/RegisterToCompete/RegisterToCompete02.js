import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView, Platform,
} from 'react-native';
import {icons, images} from '../../constants';
import stylesRegisterCompete from '../../resource/styles/registerCompete01Style';
import colors from "../../constants/colors";
import IconCameraParent from "../../resource/icon/icon-camera-parent.svg";
import IconCameraSuccess from "../../resource/icon/icon-camera-success.svg";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import constant from "../../constants/constant";
import ProgressiveImage from "../../components/ProgressiveImage";

function RegisterToCompete02({route}) {
  const {albumImage} = route?.params;
  console.log(albumImage, 'albumImage');
  return (
    <SafeAreaView style={stylesRegisterCompete.container}>
      {/*<View style={stylesRegisterCompete.eachContainer}>*/}
      {/*  <View style={{flexDirection: 'column'}} />*/}
      {/*  <View style={{flex: 80}}>*/}
      {/*    <ScrollView style={{flex: 80}}>*/}
      {/*      <View style={{flex: 10, justifyContent: 'center'}}>*/}
      {/*        <Text style={stylesRegisterCompete.textTitle}>*/}
      {/*          参戦するバイクのことを教えてください*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <View>*/}
      {/*        <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>*/}
      {/*          <Image*/}
      {/*            resizeMode="contain"*/}
      {/*            style={stylesRegisterCompete.imageMain}*/}
      {/*            source={images.bykeImage}*/}
      {/*          />*/}
      {/*        </TouchableOpacity>*/}
      {/*        <ScrollView horizontal>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*        </ScrollView>*/}
      {/*        <ScrollView horizontal>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View>*/}
      {/*            <Image*/}
      {/*              resizeMode="contain"*/}
      {/*              source={images.bykeImage}*/}
      {/*              style={stylesRegisterCompete.smallImage}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*        </ScrollView>*/}
      {/*      </View>*/}
      {/*    </ScrollView>*/}
      {/*  </View>*/}
      {/*  <View style={{flex: 1}} />*/}
      {/*  <TouchableOpacity*/}
      {/*    onPress={() => {*/}
      {/*      navigation.navigate('RegisterToCompete03');*/}
      {/*    }}*/}
      {/*    style={stylesRegisterCompete.buttonNext}>*/}
      {/*    <Text style={stylesRegisterCompete.textButtonNext}>次へ</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
      <View style={{alignItems: 'center', flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingVertical: 20}}>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 19 : 14, fontWeight: 'bold', color: colors.colorPageText}} >参戦するバイクのことを教えてください</Text>
        </View>
        <ScrollView style={{ flex: 1, width: '100%'}}>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
            <ProgressiveImage
              thumbnailStyle={{width: '100%',
                height: '100%'}}
              source={{uri: albumImage['imageCommon']?.img?.uri}}
              containerStyle={{width: '100%',
                height: '100%'}}
            />
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0, width: '100%', paddingBottom: 10, backgroundColor: colors.white}}>
          <ButtonCustomComponent
            label={'次へ'}
            customStyle={{ backgroundColor: colors.btnNext, width: constant.WIDTH / 3, alignSelf: 'center'}}
            customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 14, paddingVertical: Platform.OS === 'ios' ? 5 : 0}}
            onPress={() => {
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete02;
