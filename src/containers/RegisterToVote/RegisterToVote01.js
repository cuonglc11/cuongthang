import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet, Platform,
} from 'react-native';
import {icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import TextInputCustomComponent from '../../components/TextInputCustomComponent';
import ModalDropdownComponent from "../../components/ModalDropdownComponent";
import commonStyle from "../../resource/styles/commonStyles";
import constant from "../../constants/constant";
import {navigateAction} from "../../actions/navigationActions";
import ProgressiveImage from '../../components/ProgressiveImage';
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import {useDispatch} from "react-redux";
import common from '../../utils/common';

function RegisterToVote01(props) {
  const dispatch = useDispatch();
  const [isDoubleClick, setIsDoubleClick] = useState(true);
  const [imgavt , setImgAvt] = useState({})
  const openCamera = () =>  {
    // console.log('11111')
    setIsDoubleClick(false);
    common.pickImageFromCamera(
      async result =>  {
        // await addNewImge(result)
        setImgAvt(result.path)
      },
      onFalse => {
        setIsDoubleClick(true)
      }
    )

  }
  const [image, setAlbumImage] = useState({
    imageCommon: {
      key: 'imageCommon',
      img: null,
      imgActive: false,
    }
  })

  const addNewImge = async result => {
    const imageConverted  = await common.resizeImageNotVideo(result)
    // const isImgActive = Object.values(newAlbum).find(value => value.imgActive)
    if(imageConverted?.uri){
      isImgActive.img  = imageConverted
      // console.log("test ảnh" +imageConverted.uri) 
      setImgAvt(imageConverted.uri)
      // console.log('xcd')
    }
    // console.log(albumImage['imageCommon'].img)
    // setAlbumImage(newAlbum)
    setIsDoubleClick(true)
  
  }
  console.log(imgavt)

  

  const [valueToVote, setValueToVote] = useState({
    nickName: {
      value: '',
      key: 'nickName',
      placeHolder: 'ニックネーム',
      errorMessage: null,
    },
    licenseHistory: {
      key: 'licenseHistory',
      value: '',
      data: [
        {label: '型', value: '1'},
      ],
    },
    age: {
      key: 'age',
      value: '',
      data: [
        {label: '18', value: '1'},
      ],
    },
    gender: {
      key: 'gender',
      value: '',
      data: [
        {label: 'Men', value: '1'},
      ],
    },
    prefectures: {
      key: 'prefectures',
      value: '',
      data: [
        {label: 'OK', value: '1'},
      ],
    },
    currentCar: {
      value: '',
      key: 'currentCar',
      placeHolder: '',
      errorMessage: null,
    },
    successiveCarModels: {
      value: '',
      key: 'successiveCarModels',
      placeHolder: '',
      errorMessage: null,
    },
    carModelYouWant: {
      value: '',
      key: 'carModelYouWant',
      placeHolder: '',
      errorMessage: null,
    },
    touringArea: {
      value: '',
      key: 'touringArea',
      placeHolder: 'フリーテキスト',
      errorMessage: null,
    },
    gear: {
      value: '',
      key: 'gear',
      placeHolder: 'フリーテキスト',
      errorMessage: null,
    },
  });

  function updateValueToVote(key, value) {
    const newValueToVote = {...valueToVote};
    const fieldChanged = newValueToVote[key];

    fieldChanged.value = value;
    setValueToVote(newValueToVote);
  }


  const renderTitle = (title, content) => {
     return (
       <View
         style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}
       >
         <Text style={{fontSize: 18, fontFamily: 'meiryo', color: colors.colorPageText}}>{title}</Text>
         <Text style={{marginLeft: 20, color: colors.colorPageText, fontSize: 12, fontFamily: 'meiryo'}}>
           {content}
         </Text>
       </View>
     )
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-20}
        style={{flex: 1, paddingHorizontal: 10}}
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
         
            ユーザー登録
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={{uri: images}} style={{height:200 , width:100}}/>
          <TextInputCustomComponent
            updateState={() => {
              updateValueToVote(valueToVote.nickName.key);
            }}
            isShadow={false}
            placeholder={valueToVote.nickName.placeHolder}
            value={valueToVote.nickName.value}
          />
          <TouchableOpacity style={{marginLeft: 20}}
           onPress = {openCamera}
          
          >
         
            <Image
              source={icons.cameraPicture}
              style={{
                height: 44,
                width: 44,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 10}}>
            <ModalDropdownComponent
              pickerView={commonStyle.styleDropDown}
              value={valueToVote.licenseHistory.value}
              placeholder={'免許歴'}
              data={valueToVote.licenseHistory.data}
              onValueChange={value => {
                updateValueToVote(valueToVote.licenseHistory.key, value);
              }}
            />
            <View style={{ width: 15}}/>
            <ModalDropdownComponent
              pickerView={commonStyle.styleDropDown}
              value={valueToVote.age.value}
              placeholder={'年齢'}
              data={valueToVote.age.data}
              onValueChange={value => {
                updateValueToVote(valueToVote.age.key, value);
              }}
            />
          </View>
          <View style={{ marginLeft: 64}}/>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 20}}>
            <ModalDropdownComponent
              pickerView={commonStyle.styleDropDown}
              value={valueToVote.gender.value}
              placeholder={'性別'}
              data={valueToVote.gender.data}
              onValueChange={value => {
                updateValueToVote(valueToVote.gender.key, value);
              }}
            />
            <View style={{ width: 15}}/>
            <ModalDropdownComponent
              pickerView={commonStyle.styleDropDown}
              value={valueToVote.age.value}
              placeholder={'都道府県'}
              data={valueToVote.age.data}
              onValueChange={value => {
                updateValueToVote(valueToVote.age.key, value);
              }}
            />
          </View>
          <View style={{ marginLeft: 64}}/>
        </View>
        {renderTitle('現愛車', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={() => {
            updateValueToVote(valueToVote.currentCar.key);
          }}
          isShadow={false}
          placeholder={valueToVote.currentCar.placeHolder}
          value={valueToVote.currentCar.value}
          styleContainer={{marginVertical: 0}}
        />
        {renderTitle('歴代車種', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={() => {
            updateValueToVote(valueToVote.successiveCarModels.key);
          }}
          isShadow={false}
          placeholder={valueToVote.successiveCarModels.placeHolder}
          value={valueToVote.successiveCarModels.value}
          styleContainer={{marginVertical: 0}}
        />
        {renderTitle('欲しい車種', '複数の場合はカンマ区切り')}
        <TextInputCustomComponent
          updateState={() => {
            updateValueToVote(valueToVote.carModelYouWant.key);
          }}
          isShadow={false}
          placeholder={valueToVote.carModelYouWant.placeHolder}
          value={valueToVote.carModelYouWant.value}
          styleContainer={{marginVertical: 0}}
        />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 20, width: '50%'}}>
          <ModalDropdownComponent
            pickerView={commonStyle.styleDropDown}
            value={valueToVote.licenseHistory.value}
            placeholder={'8耐&motoGP観戦歴'}
            data={valueToVote.licenseHistory.data}
            onValueChange={value => {
              updateValueToVote(valueToVote.licenseHistory.key, value);
            }}
          />
        </View>
        {renderTitle('ツーリングエリア', '')}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueToVote.touringArea.placeHolder}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueToVote.touringArea.value}
            onChangeText={text => updateValueToVote(valueToVote.touringArea.key, text)}
          />
        </View>
        {renderTitle('ギア', '')}
        <View style={[styles.textAreaContainer, { marginBottom: 30}]}>
          <TextInput
            style={[styles.textArea]}
            underlineColorAndroid="transparent"
            placeholder={valueToVote.gear.placeHolder}
            numberOfLines={2}
            multiline={true}
            blurOnSubmit={false}
            value={valueToVote.gear.value}
            onChangeText={text => updateValueToVote(valueToVote.gear.key, text)}
          />
        </View>

        <ButtonCustomComponent
          label={'次へ'}
          customStyle={{ backgroundColor: colors.btnNext, width: constant.WIDTH / 3, alignSelf: 'center', marginVertical: 20}}
          customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 14, paddingVertical: Platform.OS === 'ios' ? 5 : 0}}
          onPress={() => {
            dispatch(navigateAction({name: 'RegisterToVote02'}));
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
    height: 48,
  },
  textArea: {
    justifyContent: 'flex-start',
    fontSize: 14,
    paddingRight: 8,
  },
});

export default RegisterToVote01;
