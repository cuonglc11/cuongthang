import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform, StyleSheet,
} from 'react-native';
import {icons} from '../constants';
import stylesRegisterCompete03 from '../resource/styles/registerCompete03Style';
import commonStyle from '../resource/styles/commonStyles';
import colors from '../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputCustomComponent from '../components/TextInputCustomComponent';
import ModalDropdownComponent from '../components/ModalDropdownComponent';
import constant from "../constants/constant";
import {navigateAction} from "../actions/navigationActions";
import ButtonCustomComponent from "../components/ButtonCustomComponent";
import {useDispatch} from "react-redux";

function RegisterToCompete03(props) {
  const dispatch = useDispatch();

  const [valueRegister, setValueRegister] = useState({
    entrySection: {
      value: '',
      key: 'entrySection',
      data: [{label: '18', value: '1'}],
    },
    machineName: {
      value: '',
      key: 'machineName',
      placeHolder: 'マシン名',
      errorMessage: null,
    },
    appealPoint: {
      key: 'appealPoint',
      value: '',
      placeHolder: 'アピールポイント',
      errorMessage: null,
    },
    description: {
      key: 'description',
      value: '',
      placeHolder: 'カスタム説明／概算総費用',
      errorMessage: null,
    },
  });

  function updateValueRegister(key, value) {
    const newValue = {...valueRegister};
    const fieldChanged = newValue[key];

    fieldChanged.value = value;
    setValueRegister(newValue);
  }

  const renderTitle = (title, content) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'meiryo',
            color: colors.colorPageText,
            marginLeft: 10
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginLeft: 20,
            color: colors.colorPageText,
            fontSize: 12,
            fontFamily: 'meiryo',
          }}
        >
          {content}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={stylesRegisterCompete03.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-20}
        style={{flex: 1, paddingHorizontal: 15}}
      >
        <View style={{flex: 10, justifyContent: 'center', marginVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              fontFamily: 'meiryo',
              fontSize: 17,
              color: colors.colorPageText,
            }}
          >
            参戦するバイクのことを教えてください
          </Text>
        </View>
        {renderTitle('エントリー部門')}
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <ModalDropdownComponent
            pickerView={commonStyle.styleDropDown}
            value={valueRegister.entrySection.value}
            placeholder={''}
            data={valueRegister.entrySection.data}
            onValueChange={value => {
              updateValueRegister(valueRegister.entrySection.key, value);
            }}
          />
          <TouchableOpacity
            style={{
              marginLeft: 10,
              backgroundColor: '#D0D0D0',
              width: 31,
              height: 31,
              borderRadius: 31,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              resizeMode="contain"
              source={icons.question}
            />
          </TouchableOpacity>
        </View>
        {renderTitle('マシン名')}
        <TextInputCustomComponent
          updateState={() => {
            updateValueRegister(valueRegister.machineName.key);
          }}
          isShadow={false}
          placeholder={valueRegister.machineName.placeHolder}
          value={valueRegister.machineName.value}
          styleContainer={{ marginVertical: 0, marginBottom: 10}}
        />
        {renderTitle('アピールポイント')}
        <View style={[styles.textAreaContainer, { marginBottom: 10}]}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueRegister.appealPoint.placeHolder}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueRegister.appealPoint.value}
            onChangeText={text => updateValueRegister(valueRegister.appealPoint.key, text)}
          />
        </View>
        {renderTitle('カスタム説明／概算総費用')}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueRegister.description.placeHolder}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueRegister.description.value}
            onChangeText={text => updateValueRegister(valueRegister.description.key, text)}
          />
        </View>
        <ButtonCustomComponent
          label={'次へ'}
          customStyle={{ backgroundColor: colors.btnNext, width: constant.WIDTH / 3, alignSelf: 'center', marginBottom: 20, marginTop: 50}}
          customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 14, paddingVertical: Platform.OS === 'ios' ? 5 : 0}}
          onPress={() => {
            dispatch(navigateAction({name: 'RegisterToCompete04'}));
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  textAreaContainer: {
    paddingHorizontal: 10,
    flex: 1,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 109,
  },
  textArea: {
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingRight: 8,
  },
});

export default RegisterToCompete03;
