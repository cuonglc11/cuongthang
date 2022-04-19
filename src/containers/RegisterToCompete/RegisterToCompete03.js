import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import {icons,images} from '../../constants';
import stylesRegisterCompete03 from '../../resource/styles/registerCompete03Style'
import { useNavigation } from '@react-navigation/native';

function RegisterToCompete03(props) {
  const [selected, setSelected] = useState(null);

  const [isShow, setIsShow] = useState(false);
  const onChangeIsShow = newValue => {
    return () => {
      setIsShow(newValue);
    };
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesRegisterCompete03.container}>
      <View style={stylesRegisterCompete03.eachContainer}>
        <View style={stylesRegisterCompete03.flex90}>
          <ScrollView style={stylesRegisterCompete03.flex90}>
            <View
              style={stylesRegisterCompete03.viewTitle}>
              <Text
                style={stylesRegisterCompete03.textTitle}>
                参戦するバイクのことを教えてください
              </Text>
              <View>
              <Text style={{marginTop:30 , marginStart:10}}>マシン名</Text>
              </View>
              <View
                style={stylesRegisterCompete03.viewInput1}>
                <TextInput style={{flex: 1}} placeholder="マシン名" />
              
              </View>
              <View>
              <Text style={{marginTop : 30, marginStart:10}}>アピールポイント</Text>
              </View>
              <View
                style={stylesRegisterCompete03.viewInputComment}>
                <TextInput placeholder="アピールポイント" />
              </View>
              <View>
              <Text style={{marginTop : 30, marginStart:11}}>カスタム説明／概算総費用</Text>
              </View>
              <View
                style={stylesRegisterCompete03.viewInputComment}>
                <TextInput placeholder="カスタム説明／概算総費用" />
              </View>
            
            </View>
            <View>
              <Text style={{marginTop : 30, marginStart:14}}>エントリー部門</Text>
              </View>
              <TouchableOpacity onPress={onChangeIsShow(!isShow)}>
                <View
                  style={{
                    height: 50,
                    backgroundColor :'white',
                    marginStart : 12,
                    flexDirection: 'row',
                    marginTop : 12,
                    borderColor:"black",
                    borderWidth:1,
                    borderRadius:10,
                    width : 150,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingEnd: 5,
                    paddingStart: 10,
                  }}>
                  <Text>{selected?.label ?? ' 性別'}</Text>
                  <Image  source={icons.sortDow} style={{height : 20 , width : 20}} />
                </View>
              </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center',marginTop:50}}>
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate('RegisterToCompete04')
              }}
                style={stylesRegisterCompete03.buttonNext}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
                  次へ
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterToCompete03;