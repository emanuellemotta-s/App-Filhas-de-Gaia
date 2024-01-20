import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image} from 'react-native';
import Button from './Button';
import Logo from './Logo';
import Titulo from './Titulo';

export default function TelaInicial(){
    return(
        <View style={styles.container}>
            <View style={styles.barraSuperior}>
                <Image source={require("../assets/perfil vazio.png")}/>
                <Titulo text="Olá, Nome do usuário"/>
            </View>

            <StatusBar hidden/>
            <Logo/>
            <Button text="NOVO HÁBITO"/>
            
            <View></View>
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
      },
    
    barraSuperior: {
        flex: 'row',
        backgroundColor: '#8c8cc2'
    }
});