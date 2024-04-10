import React, { useState } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Titulo from './Titulo';
import { botao, primaria } from './cores';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TelaInicialAdm() {

    const [option, setOption] = useState("Materiais")
    return (

        <View style={styles.container}>
            <View style={styles.barraSuperior}>
                <MaterialCommunityIcons name="account-settings" size={95} color="white" margin={20} />
                <Titulo text="Administrador" />
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
                <View style={{flexDirection:"row", alignItems:"center", gap:10, marginVertical:8}}>
                    <Pressable
                    onPress={() => setOption("Materiais")}
                        style={{
                            backgroundColor: option == "Materiais" ? botao : primaria,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderRadius: 25,
                        }}>
                        <Text style={{textAlign: "center", color: option == "Materiais" ? primaria : botao, fontSize:14}}>Materiais</Text>
                    </Pressable>
                    <Pressable
                    onPress={() => setOption("Doações")}
                        style={{
                            backgroundColor: option == "Doações" ? botao : primaria,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderRadius: 25,
                        }}>
                        <Text style={{textAlign: "center", color: option == "Doações" ? primaria : botao, fontSize:14}}>Doações</Text>
                    </Pressable>
                </View>
            </ScrollView>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaria,
    },

    barraSuperior: {
        flexDirection: 'row',
        backgroundColor: '#8c8cc2',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 30
    },

});