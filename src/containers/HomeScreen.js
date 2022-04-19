import React, {Component, useState} from 'react';
import {Text, StyleSheet,
  SafeAreaView,} from 'react-native';
import commonStyle from "../resource/styles/commonStyles";
import colors from '../constants/colors';

function HomeScreen() {
  return(
    <SafeAreaView style={[commonStyle.flex1, {backgroundColor: colors.white}]}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {};

const styles = StyleSheet.create({

});

export default HomeScreen;
