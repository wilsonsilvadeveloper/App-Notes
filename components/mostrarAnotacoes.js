import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        if(this.props.anotacoes != null && this.props.anotacoes.length > 0 && this.props.anotacoes != undefined){
            return(
                <View style={{width:'100%', alignItems:'center'}}>
                    {this.props.anotacoes.map((note, index) => (
                        <ScrollView style={styles.anotacoes} key={index}>
                            <Text style={styles.anotacoesText}>{note.notes}</Text>
                        </ScrollView>
                    ))}
                </View>
            );   
        } else {
            return(
                <View>
                    <Text style={{color:'white', marginTop:10, fontSize:16}}>Nenhuma anotação encontrada :(</Text>
                </View>
            );
        }
        
    }
}