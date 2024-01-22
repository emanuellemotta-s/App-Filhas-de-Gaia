import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'; 
import { StyleSheet } from "react-native";
import { botao } from './cores';

export default function Button(props){
    let a = props.cor
    let b = props.altura 
    let c = props.largura
    return(
        
        <TouchableOpacity style={getStyle(a, b, c).button} onPress={props.press}>
            <Text style={getStyle(a, b, c).text_button}>{props.text}</Text>
        </TouchableOpacity>
    
    )

    
}

function getStyle(nova_cor, nova_alt, nova_larg){
    if(!nova_cor){
        nova_cor = botao
    }
    if( !nova_alt ){

        nova_alt = 40
    }
    if(!nova_larg){
        nova_larg = '70%'
    }
    return StyleSheet.create({
        button: {
            width: nova_larg,
            height: nova_alt,
            backgroundColor: nova_cor,
            borderRadius: 20,
            justifyContent:'center',
            margin:20,
            
        },
        text_button: {
            color:'white', 
            textAlign:'center'
          }
    })
}
