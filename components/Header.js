import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/style';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.fontStyleHeader}>Notes</Text>
            </View>
        );
    }
}