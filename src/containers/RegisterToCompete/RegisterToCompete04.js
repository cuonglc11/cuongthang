import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,Keyboard
} from 'react-native';
import constant from '../../constants/constant';
import {icons} from '../../constants';
import stylesRegisterCompete03 from '../../resource/styles/registerCompete03Style';
import commonStyle from '../../resource/styles/commonStyles';
import colors from '../../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputCustomComponent from '../../components/TextInputCustomComponent';
import ModalDropdownComponent from '../../components/ModalDropdownComponent';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';

function RegisterToVote04(props) {
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShow(false);
    });
  });
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flexDirection: 'column', flex: 1, zIndex: 9, elevation: 1}}>
        {keyboardIsShow==false&&<Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            marginLeft: 40,
            marginVertical: 20,
          }}
        >
          ハッシュタグを10個まで登録できます
        </Text>}
        
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{color: 'white', fontSize: 20}}>ZX25R</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{color: 'white', fontSize: 20}}>S1000rr</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{color: 'white', fontSize: 20}}>Ducati899</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 15, marginTop: 10}}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{color: 'white', fontSize: 20}}>2スト</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{color: 'white', fontSize: 20}}>レーサーレプリア</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 2, backgroundColor: 'grey', margin: 10}} />
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>HONDA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              KAWASAKI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              チャンパー
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              アッパーカウル
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgb(143,191,11)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{color: 'rgb(143,191,11)', fontSize: 20}}>
              セパハン
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 25}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              width: '50%',
              borderRadius: 5,
              borderColor: colors.borderColor,
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 41,
              marginTop: 30,
            }}
          >
            <TextInput
              placeholder="タグ"
              style={{
                width: '65%',
                paddingLeft: 10,
              }}
            />
            <TouchableOpacity
              style={{
                width: 45,
                height: 29,
                backgroundColor: '#969696',
                borderRadius: 5,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{color: colors.white}}>追加</Text>
            </TouchableOpacity>
          </View>
        </View>
        {keyboardIsShow==false&&<View style={{ position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <ButtonCustomComponent
          label={'次へ'}
          customStyle={{
            backgroundColor: colors.btnNext,
            width: constant.WIDTH / 3,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 50,
          }}
          customStyleText={{
            fontSize: constant.HEIGHT > 700 ? 24 : 14,
            paddingVertical: Platform.OS === 'ios' ? 5 : 0,
          }}
          onPress={() => {
          }}
        />
        </View>
        }
        
      </View>
    </SafeAreaView>
  );
}
export default RegisterToVote04;
