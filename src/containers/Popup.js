import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {icons,images} from '../constants';
function Popup(props) {
  // const {navigation, router} = props;
  // const {navigate, goback} = navigation;
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal transparent visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.eachContainer}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.buttonClose}>
                <Image source={icons.cancel} style={{width:45,height:45}}/>
              </View>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.textTop}>
                ダウンロードありがとうございます
              </Text>
              <TouchableOpacity
              onPress={()=>{
                // navigate('AuthNavigator')
              }}>
              <View style={styles.viewMain}>
                <Image source={icons.dialogSuzuka} />
              </View>
              </TouchableOpacity>
              
              <View style={{padding: 10}}>
                <Text style={styles.textBot}>
                  参加者も投票者もアンケートに回答して投票数をアップ！
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  eachContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    elevation: 10,
  },
  buttonClose: {
    width: 45,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#676767',
    borderRadius: 60,
    padding: 2,
    marginRight: -35,
    marginTop: -15,
  },
  textTop: {
    color: 'rgb(62,150,255)',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  viewMain: {justifyContent: 'center', alignItems: 'center'},
  textBot: {color:'#484848', fontSize: 20, margin: 5},
});
export default Popup;
