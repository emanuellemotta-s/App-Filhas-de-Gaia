import React from 'react';
import { Text } from 'react-native'; 
import { StyleSheet } from "react-native";

export default function Titulo(props){
    return(
        <Text style={styles.text}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color:'white',
        fontSize: 30,
        margin: 10,
        padding: 15
    }
});