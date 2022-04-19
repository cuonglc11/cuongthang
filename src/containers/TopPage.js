import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import {images} from '../constants';
import colors from '../constants/colors';

function TopPage(props) {
  const objectEvent = [
    {
      name: 'オフィシャル実況',
      img: images.news,
    },
    {
      name: 'U1GPに参加',
      img: images.bgu1,
    },
    {
      name: 'イベント／コミュニティー',
      img: images.event,
    },
  ];
  const [item, setItem] = useState(objectEvent);
  const {navigation, router} = props;
  const {navigate, goback} = navigation;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
           onPress={() => navigate('test1')}
            style={{paddingHorizontal: 10, marginTop: 20}}>
            <Text style={styles.titlePage}>{item[0].name}</Text>
            <Image
              resizeMode="contain"
              style={{height: 200, width: '100%'}}
              source={item[0].img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('RegisterToVote01');
            }}
            style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text style={styles.titlePage}>{item[1].name}</Text>
            <Image
              resizeMode="contain"
              style={{height: 200, width: '100%'}}
              source={item[1].img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text style={styles.titlePage}>{item[2].name}</Text>
            <Image
              resizeMode="contain"
              style={{width: '100%'}}
              source={item[2].img}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titlePage: {
    fontSize: Platform.OS === 'ios' ? 24 : 16,
    fontWeight: 'bold',
    color: colors.colorPageText,
    fontFamily: 'meiryo',
  },
});

export default TopPage;
