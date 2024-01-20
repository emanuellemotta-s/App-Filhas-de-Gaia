import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import Logo from './Logo';

export default function TelaInicial(){
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <Logo/>
            <Button text="NOVO HÁBITO"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent:'center',
        padding:20
      }
});