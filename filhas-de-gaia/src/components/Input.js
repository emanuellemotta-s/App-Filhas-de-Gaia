import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props){
    return(
        <TextInput 
        style={styles.textInput} 
        placeholder={props.texto} 
        onChangeText={props.changeText} 
        value={props.valor}
        secureTextEntry={props.secure}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width:'100%',
        height: 40,
        backgroundColor:'#fff',
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom: 10
      }
})