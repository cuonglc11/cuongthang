import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView, Platform,
} from 'react-native';
import {icons,images} from '../constants';
import stylesRegisterCompete01 from '../resource/styles/registerCompete01Style';
import IconCameraParent from '../resource/icon/icon-camera-parent.svg';
import IconCameraChildren from '../resource/icon/icon-camera-children.svg';
import IconCameraSuccess from '../resource/icon/icon-camera-success.svg';
import constant from "../constants/constant";
import colors from '../constants/colors';
import ButtonCustomComponent from "../components/ButtonCustomComponent";
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import common from "../utils/common";
import {useDispatch} from "react-redux";
import {navigateAction} from "../actions/navigationActions";


function RegisterToCompete01(props) {
  const actionSheetIsImage = useRef(null);
  const dispatch = useDispatch();

  const [albumImage, setAlbumImage] = useState({
    imageCommon: {
      key: 'imageCommon',
      img: null,
      imgActive: false,
    },
    imageOne: {
      key: 'imageOne',
      img: null,
      imgActive: false,
    },
    imageTwo: {
      img: null,
      key: 'imageTwo',
      imgActive: false,
    },
    imageThree: {
      img: null,
      key: 'imageThree',
      imgActive: false,
    },
    imageFour: {
      img: null,
      key: 'imageFour',
      imgActive: false,
    },
    imageOtherOne: {
      key: 'imageOtherOne',
      img: null,
      imgActive: false,
    },
    imageOtherTwo: {
      key: 'imageOtherTwo',
      img: null,
      imgActive: false,
    },
    imageOtherThree: {
      key: 'imageOtherThree',
      img: null,
      imgActive: false,
    },
    imageOtherFour: {
      key: 'imageOtherFour',
      img: null,
      imgActive: false,
    },
  });

  const [isDoubleClick, setIsDoubleClick] = useState(true);

  const renderActionSheet = () => {
    const optionsIsImage = [
      '写真を撮る',
      'ライブラリから選ぶ',
      'キャンセル',
    ];
    return (
      <ActionSheet
        useNativeDriver={true}
        ref={actionSheetIsImage}
        options={optionsIsImage}
        cancelButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 0:
              isDoubleClick ? openCamera() : null;
              break;
            case 1:
              isDoubleClick ? openGallery() : null;
              break;
            default:
              break;
          }
        }}
      />
    );
  };

  const openCamera =  () => {
    setIsDoubleClick(false);
    common.pickImageFromCamera(
      async result => {
        await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const openGallery = () => {
    setIsDoubleClick(false);
    common.pickImageFromGallery(
      async result => {
       await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const addNewImage = async result => {
    const newAlbum = {...albumImage};
    const imageConverted = await common.resizeImageNotVideo(result);

    const isImgActive = Object.values(newAlbum).find(value => value.imgActive);
    if (imageConverted?.uri) {
      isImgActive.img = imageConverted;
    }
    setAlbumImage(newAlbum);
    setIsDoubleClick(true);
  };

  const showActionSheet = () => {
    if (actionSheetIsImage.current === null) {
      return;
    }
    actionSheetIsImage.current.show();

  };

  const handleImage = keys => {
    const newAlbum = {...albumImage};
    Object.keys(albumImage).forEach(key => {
      newAlbum[key].imgActive = keys === key;
    });
    console.log(newAlbum, 'newAlbum');
    setAlbumImage(newAlbum);
  };

  const checkImageInList = (key) => {
    const newAlbum = {...albumImage};
    const isImgActive = Object.values(newAlbum).find(value => value.key === key);
    console.log(isImgActive, 'isImgActive');
    return !isImgActive?.img;
  };

  const renderAddImage = (key, name) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleImage(key);
          showActionSheet();
        }}
        style={{ width: constant.WIDTH / 4, alignItems: 'center', justifyContent: 'center'}}>
        {checkImageInList(key) ? <IconCameraChildren /> : <IconCameraSuccess width={44} height={44}/>}
        <Text style={{width: '100%', textAlign: 'center', paddingLeft: constant.WIDTH / 9, top: -5, fontSize: 16}}>{name}</Text>
      </TouchableOpacity>
    )
  };

  const renderAddImageOther = (key, isFirst = false) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleImage(key);
          showActionSheet();
        }}
        style={{ width: constant.WIDTH / 3.7, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: isFirst ? 1 : 0, height: constant.HEIGHT / 10}}>
        {checkImageInList(key) ? <IconCameraChildren  width={24} height={24}/> : <IconCameraSuccess width={24} height={24}/>}
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={stylesRegisterCompete01.container}>
      <View style={{alignItems: 'center', flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingVertical: 20}}>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 19 : 14, fontWeight: 'bold', color: colors.colorPageText}} >参戦するバイクのことを教えてください</Text>
        </View>
        <ScrollView style={{ flex: 1, width: '100%'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              handleImage('imageCommon');
              showActionSheet();
            }}
            style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
            <Text style={{fontSize: Platform.OS === 'ios' ? 16 : 14, marginBottom: 12}}>メイン写真</Text>
            {checkImageInList('imageCommon') ? <IconCameraParent /> : <IconCameraSuccess width={96} height={96}/>}
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20, flexDirection: 'row'}}>
            { renderAddImage('imageOne', '右')}
            { renderAddImage('imageTwo', '左')}
            { renderAddImage('imageThree', '前')}
            { renderAddImage('imageFour', '後')}
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20, flexDirection: 'row'}}>
              {renderAddImageOther('imageOtherOne', true)}
              {renderAddImageOther('imageOtherTwo')}
              {renderAddImageOther('imageOtherThree')}
              {renderAddImageOther('imageOtherFour')}
            </View>
          </ScrollView>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0, width: '100%', paddingBottom: 10, backgroundColor: colors.white}}>
          <ButtonCustomComponent
            label={'次へ'}
            customStyle={{ backgroundColor: colors.btnNext, width: constant.WIDTH / 3, alignSelf: 'center'}}
            customStyleText={{ fontSize: constant.HEIGHT > 700 ? 24 : 14, paddingVertical: Platform.OS === 'ios' ? 5 : 0}}
            onPress={() => {
              dispatch(navigateAction({name: 'RegisterToCompete02', params: {
                  albumImage : albumImage,
                }}));
            }}
          />
        </View>
      </View>
      {renderActionSheet()}
    </SafeAreaView>
  );
}

export default RegisterToCompete01;
