import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState , useEffect} from 'react';
import get from '../repositories/api/get';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { images ,icons} from '../constants';
  function DetailProfile(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
         <ScrollView>
         <View style={{flex: 1 , flexDirection :'row' , padding : 10}}>
            <Image source={images.bykeImage} style={{width:70, height:70, borderRadius:50}}/>
           <View style={{marginStart: 12 , marginTop : 12}}>
           <Text style={{fontWeight:'bold' , fontSize : 18 , color:'black'}}>すみたん号</Text>
           <Text style={{fontSize : 12}}>
               HarleyDavidson XL1200X
           </Text>
           </View>
           <View style={{flex : 0.9}}/>
           <View style={{flex : 1,flexDirection:'column'}}>
               <View style={{flexDirection:'row',marginTop:6}}>
               <Image source={icons.like}/>
               <View style={{flex:0.5}} />
                  <Text style={{alignSelf:'center' , fontSize:17}}>23</Text>
               </View>
               <Text style={{alignSelf:'center',fontWeight:'bold'}}>予選</Text>
           </View>
         </View>
         <View>
         <View>
                <Image
                  resizeMode="contain"
                  style={{   alignSelf: 'center',
                  backgroundColor: 'red',
                  height: 240,
                  }}
                  source={images.bykeImage}
                />
         </View>
         <ScrollView horizontal>
         <View style={{flexDirection:'column'}}>
                  <View>
                     <Image
                     source={images.bykeImage}
                     style={{width: 100, height: 100}}
                     />
                  </View>
                </View>
                <View style={{flexDirection:'column'}}>
                  <View>
                     <Image
                     source={images.bykeImage}
                     style={{width: 100, height: 100}}
                     />
                  </View>
                </View>
                <View style={{flexDirection:'column'}}>
                  <View>
                     <Image
                     source={images.bykeImage}
                     style={{width: 100, height: 100}}
                     />
                  </View>
                </View>
                <View style={{flexDirection:'column'}}>
                  <View>
                     <Image
                     source={images.bykeImage}
                     style={{width: 100, height: 100}}
                     />
                  </View>
                  
                </View>
                <View style={{flexDirection:'column'}}>
                  <View>
                     <Image
                     source={images.bykeImage}
                     style={{width: 100, height: 100}}
                     />
                  </View>
                  
                </View>
         </ScrollView>
         </View>
         <View style={{padding:15}}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>予選（2022年7月1日〜開催日）</Text>
          <View  style={{marginTop:10 , flexDirection:'row'}}>
              <Text style={{fontSize:18}}>総合ランキング</Text>
              <View style={{flex : 0.7}}/>
              <Text style={{fontSize:18}}>1,062位／1,532台中</Text>

          </View>
          <View  style={{marginTop:10 , flexDirection:'row'}}>
              <Text style={{fontSize:18}}>ハーレー部門</Text>
              <View style={{flex : 0.9}}/>
              <Text style={{fontSize:18}}>112位／130台中</Text>
          </View>
         </View>
         <View style={{height: 3, backgroundColor: 'grey', margin: 10 }} />
          <View style={{ width:'80%' , marginStart : 10}}>
          <Text style={{}}>
             ナイトロンのリアサスがお気に入りです。その他、イ
             ージーライダースのリアフェンダー（本当は交換した
             い。マフラーはブラスです。
             ノーマルのフロントブレーキマスターを持っていきま
             す。もし欲しい人がいれば、お気軽に声をかけてくだ
             </Text>
          </View>
         </ScrollView>
         <View style={{justifyContent:'center' , flexDirection:'row' , backgroundColor:'none'}}>
           <TouchableOpacity
           style={{alignSelf:'center',height:42 , width:100 , borderRadius:4 ,  backgroundColor:'rgb(255,127,33)'}}
           >
               <Text style={{color:'white' , alignSelf:'center' , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>もらった投票</Text>
           </TouchableOpacity>
           <TouchableOpacity
           style={{alignSelf:'center',height:42, marginStart:20 , width:100 , borderRadius:4 ,  backgroundColor:'rgb(28,168,255)'}}
           >
               <Text style={{color:'white' , alignSelf:'center' , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>コメント</Text>
           </TouchableOpacity>
         
         </View>
        </SafeAreaView>
    )
  }
  export default DetailProfile