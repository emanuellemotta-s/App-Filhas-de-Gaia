import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

export default function Logo(){
    return(
        <Image style={styles.logo} source={require('../assets/logo-removebg-preview.png')}/>
    )
    
}

const styles = StyleSheet.create({
    logo: {
        width: 200, 
        height: 200, 
        marginBottom: 30}
})