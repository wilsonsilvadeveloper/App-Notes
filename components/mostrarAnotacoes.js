import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <View style={styles.anotacoes}>
                <Text style={styles.anotacoesText}>{this.props.anotacoes}</Text>
            </View>
        );
    }
}