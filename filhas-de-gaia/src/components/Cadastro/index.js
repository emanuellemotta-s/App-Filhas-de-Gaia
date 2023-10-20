import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Image } from 'react-native'; 
import styles from './style'
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
export default function Cadastro({navigation}) {
  
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [senha, setSenha] = useState();

  const telaLogin = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
    })
  }
  
  function cadastrar(){
    if(nome == null || email == null || telefone == null || senha == null){
      alert("Preencha todos os campos");
      return;
    
    }else{
      alert(nome);
      setNome(null)
      setEmail(null)
      setTelefone(null)
      setSenha(null)
      return;
    }
    
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Logo/>

      <Input texto="Nome" changeText={text=>setNome(text)} valor={nome}/>
      <Input texto="E-mail" changeText={text=>setEmail(text)} valor={email}/>
      <Input texto="Telefone" changeText={text=>setTelefone(text)} valor={telefone}/>
      <Input texto="Senha" changeText={text=>setSenha(text)} valor={senha} secure={true}/>

      <Button text="CADASTRAR" press={cadastrar}/>
      <Button text="FAZER LOGIN" press={telaLogin}/>
    </View>
  );
}


