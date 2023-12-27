import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView ,ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles/style';
import Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.body = new Body();
  }

  render(){
    return(
      <SafeAreaView style={stylesLocal.container}>
          <StatusBar style='light' hidden/>
          <Header></Header>
          <Body></Body>
      </SafeAreaView>
    )};
}

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D00B0B'
  }
});