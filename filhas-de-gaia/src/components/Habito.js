import React from "react";
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import Button from "./Button";
import { StyleSheet } from "react-native";
import Titulo from "./Titulo";
import { botao, primaria, habito } from "./cores";


export default function Habito(props){
    const days = ["1º dia", "2º dia", "3º dia", "4º dia", "5º dia"];
    const habits = ["Tampas de garrafas", "Óleo usado", "Garrafa Pet"]
    return(
        <>
        <View style={styles.habito}>
            {/* <Titulo text="Tampas de garrafas" cor={texto_primario}/>
            <Titulo text="Descrição" cor={texto_secundario}/> */}
            
            <View>
                {habits.map((item) => (
                    <Pressable
                    onLongPress={props.funcao}
                    style={{
                        marginVertical: 10,
                        backgroundColor: habito,
                        padding: 12,
                        borderRadius:24
                    }}>
                        <Text style={{textAlign: "center", fontWeight: "500", color: primaria}}>{item}</Text>

                    </Pressable>
                ))}
            </View>
        
            {/*<View style={styles.buttons}>
                <Button text="Detalhes" altura={20} largura='15%'/>
                <Button text="Remover" altura={20} largura='15%'/>
            </View>*/}
        </View>
        
    </>
    );
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