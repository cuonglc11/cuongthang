import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  FlatList,
} from 'react-native';
import colors from '../../constants/colors';
import constant from '../../constants/constant';
import {navigateAction} from '../../actions/navigationActions';
import ButtonCustomComponent from '../../components/ButtonCustomComponent';
import {useDispatch} from 'react-redux';

function RegisterToVote02(props) {
  const [tag,setTag]=useState('')
  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShow(false);
    });
  });
  const dispatch = useDispatch();
  const route = useRoute()

  console.log(route.params);

  const SELECTTAG = [
    {name: 'ミニバイク', focus: false},
    {name: 'スクーター', focus: false},
    {name: 'ネイキッド', focus: false},
    {name: 'スポーツ', focus: false},
    {name: 'レプリカ', focus: false},
    {name: '逆輸入車', focus: false},
    {name: 'アメリカン', focus: false},
    {name: 'オフロード', focus: false},
    {name: 'ストリート', focus: false},
    {name: 'HONDA', focus: false},
    {name: 'YAMAHA', focus: false},
    {name: 'SUZUKI', focus: false},
    {name: 'Kawasaki', focus: false},
    {name: 'Harley', focus: false},
    {name: 'BMW', focus: false},
    
  ];
  const checkChooseTag = () => 
    choose.length>0
  
  const CHOOSE = []
  const [choose,setChoose] = useState(CHOOSE)
  // const onAddChoose = () => {
  //   let NEWCHOO = {name:'',focus:true}
  //   let NEWCHOOSE = [...choose,NEWCHOO]
  //   setChoose(NEWCHOOSE)
  // }
  const PREPARETAG = [
    
  ];
  const [selectTags, setSelectTags] = useState(SELECTTAG);
  const [prepareTags, setPrepareTags] = useState(PREPARETAG);
  const onAddNewTag = () =>{
      let NewPrepare = {name:tag,focus:false}
      let NEWPREPARETAG = [...prepareTags,NewPrepare]

      setPrepareTags(NEWPREPARETAG)
  }
  console.log(choose);

  // const filteredFoods = () =>
  //   foods.filter(eachFood =>
  //     eachFood.name
  //       .toLocaleLowerCase()
  //       .includes(searchText.toLocaleLowerCase()),
  //   );

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'column',
          flex: 10,
          elevation: 1,
          paddingHorizontal: 10,
        }}>
        {keyboardIsShow == false && (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            興味のあるタグを複数登録できます
          </Text>
        )}
        {keyboardIsShow==false&&<View style={{maxHeight:150}}>
          <FlatList
            data={selectTags}
            numColumns={3}
            keyExtractor={eachSelectTag => eachSelectTag.name}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  let cloneSelectTags = selectTags.map(eachSelect => {
                    if (item.name == eachSelect.name&&eachSelect.focus==false || eachSelect.focus == undefined) {
                       let NEWCHOO = {name:eachSelect.name}
                       let NEWCHOOSE = [...choose,NEWCHOO]
                       setChoose(NEWCHOOSE)
                       return {...eachSelect,focus:eachSelect.focus=true}
                    }else if(item.name == eachSelect.name&&eachSelect.focus!=false || eachSelect.focus != undefined){
                      console.log(eachSelect);
                      return {...eachSelect,focus:eachSelect.focus=false}
                    }
                    return eachSelect;
                    
                  });
                  
                  setSelectTags(cloneSelectTags);
                }}
                style={{
                  backgroundColor:
                    item.focus == false || item.focus == undefined
                      ? 'white'
                      : 'rgb(143,191,11)',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  marginLeft: 10,
                  height: 40,
                  marginBottom: 10,
                  borderColor: 'rgb(143,191,11)',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color:
                      item.focus == false || item.focus == undefined
                        ? 'rgb(143,191,11)'
                        : 'white',
                    fontSize: 20,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>}
        

        <View
          style={{
            height: 1,
            backgroundColor: 'grey',
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{ maxHeight: 150}}>
          <FlatList
            
            data={prepareTags}
            numColumns={3}
            keyExtractor={eachPrepareTag => eachPrepareTag.name}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  let clonePrepareTags = prepareTags.map(eachPrepare => {
                    if (item.name == eachPrepare.name&&eachPrepare.focus==false || eachPrepare.focus == undefined) {
                      let NEWCHOO = {name:eachPrepare.name,focus:true}
                      let NEWCHOOSE = [...choose,NEWCHOO]
                      setChoose(NEWCHOOSE)
                      return {...eachPrepare,focus:eachPrepare.focus=true}
                   }else if(item.name == eachPrepare.name&&eachPrepare.focus!=false || eachPrepare.focus != undefined){
                     
                     return {...eachPrepare,focus:eachPrepare.focus=false}
                   }
                    return eachPrepare;
                  });
                  setPrepareTags(clonePrepareTags);
                }}
                style={{
                  backgroundColor:
                    item.focus == false || item.focus == undefined
                      ? 'white'
                      : 'rgb(143,191,11)',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  marginLeft: 10,
                  height: 40,
                  marginBottom: 10,
                  borderColor: 'rgb(143,191,11)',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color:
                      item.focus == false || item.focus == undefined
                        ? 'rgb(143,191,11)'
                        : 'white',
                    fontSize: 20,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
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
              marginTop: 30,
            }}>
            <TextInput
              maxLength={9}
              returnKeyType='done'
              onChangeText={text=>{setTag(text)}}
              placeholderTextColor={'grey'}
              placeholder="タグ"
              style={{
                width: '65%',
                paddingLeft: 10,
                color: 'black',
              }}
            />
            <TouchableOpacity
              onPress={()=>onAddNewTag()}
              style={{
                width: 45,
                height: 29,
                backgroundColor: '#969696',
                borderRadius: 5,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.white}}>追加</Text>
            </TouchableOpacity>
          </View>
        </View>
        {keyboardIsShow == false && (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              paddingBottom: 10,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              disabled={checkChooseTag() == false}
              style={{
                backgroundColor:checkChooseTag()==false? colors.btnNext:'#509BE6',
                width: constant.WIDTH / 3,
                alignSelf: 'center',
                marginVertical: 20,
                borderRadius: 5,
                marginTop: 12,
                padding: 6,
              }}
              onPress={() => {
                dispatch(navigateAction({name: 'ChooseToRegister'}));
              }}
            >
              <Text style={{
            fontSize: constant.HEIGHT > 700 ? 24 : 14,
            paddingVertical: Platform.OS === 'ios' ? 5 : 0,
            alignSelf:'center',
            color: colors.white,
            fontWeight: 'bold',
          }}>次へ</Text>
        </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
export default RegisterToVote02;
