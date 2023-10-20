import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'; 
import { StyleSheet } from "react-native";

export default function Button(props){
    return(
        
        <TouchableOpacity style={styles.button} onPress={props.press}>
            <Text style={styles.text_button}>{props.text}</Text>
        </TouchableOpacity>
    
    )

    
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#8c8cc2',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom:20
      },
      text_button: {
        color:'white', 
        textAlign:'center'
      }
})