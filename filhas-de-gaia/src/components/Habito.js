import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "./Button";
import { StyleSheet } from "react-native";
import Titulo from "./Titulo";
import { texto_primario, texto_secundario } from "./cores";

export default function Habito(props){
    return(
        <View style={styles.habito}>
            <Titulo text="Tampas de garrafas" cor={texto_primario}/>
            <Titulo text="Descrição" cor={texto_secundario}/>
            
            <View style={styles.buttons}>
                <Button text="Detalhes" altura={20} largura='15%'/>
                <Button text="Remover" altura={20} largura='15%'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    habito: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 10,
        width:'95%',
        height: '30%',
        alignSelf: 'center'
        
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})