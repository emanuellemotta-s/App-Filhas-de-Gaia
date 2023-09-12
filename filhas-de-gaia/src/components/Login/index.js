import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../Cadastro/style';

export default function Login({navigation}) {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const telaCadastro = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Cadastro"}]
        })
    }

    function logar(){
        if(email == null || senha == null){
            alert("Preencha todos os campos");
            return;
        }else{
            alert(email);
            setEmail(null)
            setSenha(null)
            return;
        }
    }

    return(
      <View style={styles.container}>
        <StatusBar hidden/>
        <Image style={{width: 200, height: 200, marginBottom: 30}} source={require('../../assets/logo-removebg-preview.png')}/>
        
        <TextInput
        placeholder='Email'
        onChangeText={text=>setEmail(text)}
        style={styles.textInput}
        value={email}/>

        <TextInput
        placeholder='Senha'
        secureTextEntry={true} 
        onChangeText={text=>setSenha(text)}
        style={styles.textInput}
        value={senha}/>

        <TouchableOpacity style={styles.btnCadastro} onPress={logar}>
            <Text style={{color: 'white', textAlign: 'center'}}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro} onPress={telaCadastro}>
            <Text style={{color: 'white', textAlign: 'center'}}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </View>  
    );
}