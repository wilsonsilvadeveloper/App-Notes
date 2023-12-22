import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ScrollView style={style.container}>
        <StatusBar style='light' hidden/>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    )};
}

const style = StyleSheet.create({
  container: {
    height: '100vh',
    backgroundColor: 'red',
  }
});