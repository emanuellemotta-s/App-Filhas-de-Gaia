import React from 'react';
import { Text } from 'react-native'; 
import { StyleSheet } from "react-native";

export default function Titulo(props){
    let a = props.cor;
    return(
        <Text style={getStyle(a).titulo}>
            {props.text}
        </Text>
    );
}

function getStyle(nova_cor){
    if(!nova_cor){
        nova_cor = 'white'
    }
    return StyleSheet.create({
        titulo:{
            color: nova_cor,
            fontSize: 30,
            margin: 10,
            padding: 15,
            fontFamily: 'Helvetica',
            
        }
    })
}

