import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {icons, images} from '../../constants';
import stylesRegisterCompete from '../../resource/styles/registerCompete01Style';

function RegisterToCompete01(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesRegisterCompete.container}>
      <View style={stylesRegisterCompete.eachContainer}>
        <View style={{flexDirection: 'column'}} />
        <View style={{flex: 80}}>
          <ScrollView style={{flex: 80}}>
            <View style={{flex: 10, justifyContent: 'center'}}>
              <Text style={stylesRegisterCompete.textTitle}>
                参戦するバイクのことを教えてください
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('CameraUI')}>
                <Image
                  resizeMode="contain"
                  style={stylesRegisterCompete.imageMain}
                  source={icons.cameraMain}
                />
              </TouchableOpacity>
              <ScrollView horizontal>
                <View>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                    }}>
                    右
                  </Text>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                    }}>
                    左
                  </Text>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                    }}>
                    前
                  </Text>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      alignSelf: 'center',
                    }}>
                    後
                  </Text>
                </View>
              </ScrollView>
              <ScrollView horizontal>
                <View style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
                <View style={{borderWidth: 1}}>
                  <Image
                    resizeMode="contain"
                    source={icons.cameraPicture}
                    style={stylesRegisterCompete.smallImage}
                  />
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1}} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterToCompete02');
          }}
          style={stylesRegisterCompete.buttonNext}>
          <Text style={stylesRegisterCompete.textButtonNext}>次へ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete01;
