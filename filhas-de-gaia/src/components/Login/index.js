import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View } from 'react-native';
import styles from '../Cadastro/style';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';

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
        <Logo/>
        <Input texto="E-mail" changeText={text=>setEmail(text)} valor={email}/>
        <Input texto="Senha" changeText={text=>setSenha(text)} valor={senha} secure={true}/>


        <Button text="ENTRAR" press={logar}/>
        <Button text="FAZER CADASTRO" press={telaCadastro}/>
        
        
      </View>  
    );
}