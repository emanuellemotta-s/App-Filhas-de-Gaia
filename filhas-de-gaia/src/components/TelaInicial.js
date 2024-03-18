import React, { useState } from 'react';
import { View, Image, ScrollView, Pressable, Text } from 'react-native';
import Button from './Button';
import Titulo from './Titulo';
import { StyleSheet } from 'react-native';
import Habito from './Habito';
import { primaria, secundaria, botao, habito } from './cores';
import { BottomModal, ModalTitle, SlideAnimation, ModalContent } from "react-native-modals";
import { Ionicons, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';


export default function TelaInicial() {
    const [option, setOption] = useState("Hoje");
    const [isModalVisible, setModalVisible] = useState(false);
    const [dia, setDia] = useState("1");
    const days = ["1º dia", "2º dia", "3º dia", "4º dia", "5º dia"];
    const habits = ["Tampas de garrafas", "Óleo usado", "Garrafa Pet"]
    return (
        <>
            <View style={styles.container}>
                <View style={styles.barraSuperior}>
                    <Image style={styles.perfil} source={require("../assets/perfil vazio.png")} />
                    <Titulo text="Olá, Nome do usuário" />
                </View>

                <Button text="NOVO HÁBITO" />

                <View style={styles.titulo}>
                    <Titulo text="MEUS HÁBITOS SUSTENTÁVEIS" cor={botao} />
                </View>

                <ScrollView style={styles.listaHabitos}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 8 }}>
                        <Pressable
                            onPress={() => setOption("Hoje")}
                            style={{
                                backgroundColor: option == "Hoje" ? botao : primaria,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderRadius: 25,
                            }}>
                            <Text style={{
                                textAlign: "center",
                                color: option == "Hoje" ? primaria : botao,
                                fontSize: 14,
                            }}>Hoje</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setOption("Progresso")}
                            style={{
                                backgroundColor: option == "Progresso" ? botao : primaria,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderRadius: 25,
                            }}>
                            <Text style={{
                                textAlign: "center",
                                color: option == "Progresso" ? primaria : botao,
                                fontSize: 14,
                            }}>Progresso</Text>
                        </Pressable>
                    </View>
                    {option == "Hoje" && (
                        <View>
                            {habits.map((item) => (
                                <Pressable
                                    onLongPress={() => setModalVisible(!isModalVisible)}
                                    style={{
                                        marginVertical: 10,
                                        backgroundColor: habito,
                                        padding: 12,
                                        borderRadius: 24
                                    }}>
                                    <Text style={{ textAlign: "center", fontWeight: "500", color: primaria }}>{item}</Text>

                                </Pressable>
                            ))}
                        </View>
                    )}

                    {option == "Progresso" && (
                        <View>
                            {habits.map((item) => (
                                <Pressable
                                    style={{
                                        marginVertical: 10,
                                        backgroundColor: habito,
                                        padding: 12,
                                        borderRadius: 24
                                    }}>
                                    <View
                                    style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                        <Text style={{ textAlign: "left", fontWeight: "500", color: primaria }}>{item}</Text>
                                        <Text style={{color: primaria}}>Diário</Text>
                                    </View>

                                    <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-evenly", marginVertical:10}}>
                                        {days.map((day) => (
                                            <Pressable
                                            onPress={() => setDia(day)}>
                                                <Text style={{color: "white"}}>{day}</Text>
                                                {dia == day ? (
                                                    <FontAwesome name="circle" size={24} color="white" />
                                                ):(
                                                    <Feather name="circle" size={24} color="white" />
                                                    
                                                )}
                                            </Pressable>
                                        ))}
                                    </View>
                                </Pressable>
                            ))}
                        </View>

                    )}
                </ScrollView>

                <BottomModal
                    onBackdropPress={() => setModalVisible(!isModalVisible)}
                    onHardwareBackPress={() => setModalVisible(!isModalVisible)}
                    swipeDirection={["up", "down"]}
                    swipeThreshold={200}
                    modalTitle={<ModalTitle title="Choose Option" />}
                    modalAnimation={
                        new SlideAnimation({
                            slideFrom: "bottom",
                        })
                    }
                    visible={isModalVisible}
                    onTouchOutside={() => setModalVisible(!isModalVisible)}
                >
                    <ModalContent style={{ width: "100%", height: 200 }}>
                        <View style={{ marginVertical: 10 }}>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    marginTop: 10,
                                }}>
                                <Ionicons name="checkbox-outline" size={24} color="black" />
                                <Text>Completar</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    marginTop: 10,
                                }}>
                                <AntDesign name="edit" size={24} color="black" />
                                <Text>Editar</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    marginTop: 10,
                                }}>
                                <AntDesign name="delete" size={24} color="black" />
                                <Text>Deletar</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    marginTop: 10,
                                }}>
                                <AntDesign name="infocirlceo" size={24} color="black" />
                                <Text>Detalhes</Text>
                            </Pressable>
                        </View>
                    </ModalContent>
                </BottomModal>
            </View>

        </>
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
        backgroundColor: primaria,
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