import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

const styles = StyleSheet.create({
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        padding:10,
    },

    fontStyleHeader:{
        fontSize:20,
        fontStyle:'italic',
        color:'black'
    },

    body:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },

    anotacoes:{
        width:'100%',
        height:70,
        marginTop: 10,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderBottomColor: 'black',
        borderStyle:'solid',
        borderBottomWidth: 1,
    },

    anotacoesText: {
        fontSize: 18,
        fontWeight: '400'
    },

    containerBtn:{
        width:'100%',
        backgroundColor:'blue',
    }
    

});

export default styles; 