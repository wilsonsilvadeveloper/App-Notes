import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    header:{
        display:'flex',
        justifyContent:'center', 
        alignItems:'center',
        width: '100%',
        height: 50,
        backgroundColor: '#880B0B'
    },

    fontStyleHeader:{
        fontSize:20,
        fontStyle:'italic',
        color:'white'
    },

    body: {
        flex: 1, // Adicionado para que o Body ocupe toda a altura da tela
        alignItems:'center',
        position:'relative',
      },

    anotacoes:{
        width:'90%',
        height:'auto',
        marginTop: 4,
        marginBottom: 10,
        maxHeight: 70,
        padding: 8,
        borderColor: 'white',
        borderStyle:'solid',
        borderWidth: 1,
    },

    anotacoesText: {
        fontSize: 16,
        color: '#E2E8F5'
    },

    containerBtn: {
        width: 50,
        height: 50, // Defina a altura desejada para containerBtn
        backgroundColor: 'white',
        justifyContent: 'center', // Centraliza o texto verticalmente
        alignItems: 'center', // Centraliza o texto horizontalmente
        position:'absolute', 
        bottom:20,
        right: 20,
        borderRadius: 25
    },

    containerBtnCnl:{
        width: 50,
        height: 50, // Defina a altura desejada para containerBtn
        backgroundColor: 'white',
        justifyContent: 'center', // Centraliza o texto verticalmente
        alignItems: 'center', // Centraliza o texto horizontalmente
        position:'absolute', 
        bottom:20,
        left: 20,
        borderRadius: 25
    },

    containerTextInput:{
        width: '100%', 
        display: 'flex',
        alignItems: 'center',
    },

    TextInput:{
        width: '90%',
        height: 50,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlignVertical: 'top',
        marginTop: 20,
        padding: 10,
        color: 'white',
    }

});

export default styles; 