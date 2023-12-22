import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/style';

import Notes from './mostrarAnotacoes';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          estado:'leitura',
          anotacao:'Minha Anotação',
        }
    }

    novaAnotacao(){
        this.setState({estado: 'gravacao',anotacao: 'Nova Anotação'});
    }

    render(){
        if(this.state.estado == 'leitura'){
            return(
                <View style={styles.body}>
                    <Notes anotacoes={this.state.anotacao}></Notes>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={()=>this.novaAnotacao()} ><Text>+</Text></TouchableOpacity>
                    </View>
                </View>
            );
        } else if (this.state.estado == 'gravacao'){
            return(
                <View>
                    <Text>{this.state.estado}</Text>
                    <Notes anotacoes={this.state.anotacao}></Notes>
                </View>
            );
        }
    }
}