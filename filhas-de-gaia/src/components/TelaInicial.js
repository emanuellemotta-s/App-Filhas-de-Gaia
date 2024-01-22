import React from 'react';
import { View, Image} from 'react-native';
import Button from './Button';
import Titulo from './Titulo';
import { StyleSheet } from 'react-native';
import Habito from './Habito';
import { primaria, secundaria, botao } from './cores';

export default function TelaInicial(){
    return(
        <View style={styles.container}>
            <View style={styles.barraSuperior}>
                <Image style={styles.perfil} source={require("../assets/perfil vazio.png")}/>
                <Titulo text="Olá, Nome do usuário" />
            </View>

            <Button text="NOVO HÁBITO"/>
            
            <View style={styles.titulo}>
                <Titulo text="MEUS HÁBITOS SUSTENTÁVEIS" cor={botao}/>
            </View>
            
            <View style={styles.listaHabitos}>
                <Habito/>
                <Habito/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaria,
        alignItems: 'center',
        
      },
    
    barraSuperior: {
        flexDirection: 'row',
        backgroundColor: '#8c8cc2',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 30
    },
    perfil: {
        width: 50, 
        height: 50, 
        margin: 20,
    },

    listaHabitos: {
        flex: 1,
        backgroundColor: '#C1C2D9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        width: '98%'
    },
    titulo: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});