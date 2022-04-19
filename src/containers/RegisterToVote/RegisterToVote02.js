import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity, Platform,
} from 'react-native';
import colors from '../../constants/colors';
import constant from "../../constants/constant";
import {navigateAction} from "../../actions/navigationActions";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import {useDispatch} from "react-redux";

function RegisterToVote02(props) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          elevation: 1,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            marginLeft: 40,
            marginVertical: 20,
          }}
        >
          興味のあるタグを複数登録できます
        </Text>
        <View style={{flexDirection: 'row'}}>
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
            <Text style={{color: 'white', fontSize: 20}}>TZR250</Text>
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
            <Text style={{color: 'white', fontSize: 20}}>YAMAHA</Text>
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
            <Text style={{color: 'white', fontSize: 20}}>K2TECH</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
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
        <View
          style={{
            height: 1,
            backgroundColor: 'grey',
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row'}}>
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
        <View style={{flexDirection: 'row'}}>
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
        <View style={{marginLeft: 10}}>
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
              marginTop: 30
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
              <Text style={{ color: colors.white}}>追加</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, paddingBottom: 10, alignSelf: 'center'}}>
          <ButtonCustomComponent
            label={'次へ'}
            customStyle={{ backgroundColor: colors.btnNext, width: constant.WIDTH / 3, alignSelf: 'center'}}
            customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 14, paddingVertical: Platform.OS === 'ios' ? 5 : 0}}
            onPress={() => {
              dispatch(navigateAction({name: 'ChooseToRegister'}));
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default RegisterToVote02;
