import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image} from 'react-native';
import styles from '../styles/style';

import Notes from './mostrarAnotacoes';
export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          estado:'leitura',
          anotacao:[],
          newNote: '',
        }
    }

    componentDidMount() {
        (async () => {
          try {
            const anaotacaoLeiutura = await AsyncStorage.getItem('anotacao');
            if(anaotacaoLeiutura != null) {
              this.setState({ anotacao: JSON.parse(anaotacaoLeiutura) });
            } else {
              this.setState({ anotacao: []});
            }
          } catch (error) {
            alert('error');
          }
        })();
      }

    SetData = async () => {
        try {
          const { anotacao } = this.state;
          console.log(anotacao)
      
          if (anotacao !== null) {
            await AsyncStorage.setItem('anotacao', JSON.stringify(anotacao));
            alert('Salvo');
          } else {
            console.error('Anotacao é null ao tentar salvar.');
          }
      
        } catch (erro) {
          alert('Erro ao salvar anotacao');
          console.error('Erro: ' + erro);
        }
      };

    novaAnotacao(){
        this.setState({estado: 'gravacao'});
    }

    salvarAnotacao() {
        if (this.state.newNote === '') {
          alert('Nota vazia');
        } else {
          const novoArrayAnotacoes = [{ notes: this.state.newNote }, ...this.state.anotacao];
          // Atualizando o estado e utilizando um callback para garantir que a lógica seja executada após a atualização do estado
          this.setState({ anotacao: novoArrayAnotacoes, estado: 'leitura', newNote: '' }, () => {
            console.log(this.state.anotacao);
            this.SetData();
          });
        }
      }
      

    render(){
        if(this.state.estado == 'leitura'){
            return(
                <View style={styles.body}>
                    <Notes anotacoes={this.state.anotacao}></Notes>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={()=>this.novaAnotacao()} ><Text style={styles.containerBtnTxt}>+</Text></TouchableOpacity>
                    </View>
                </View>
            );
        } else if (this.state.estado == 'gravacao'){
            return(
                <View style={styles.body}>
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.TextInput} autoFocus={true} onChangeText={(text)=>{this.setState({newNote: text})}} numberOfLines={5} multiline={true} value={this.state.newNote}></TextInput>
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={()=>this.salvarAnotacao()}><Image style={{width:25, height:25}} source={require('../assets/confirme.png')}></Image></TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}