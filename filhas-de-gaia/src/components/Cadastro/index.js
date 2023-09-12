import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'; 
import styles from './style'
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
      <Image style={{width: 200, height: 200, marginBottom: 30}} source={require('../../assets/logo-removebg-preview.png')}/>
      
      <TextInput 
      placeholder="Nome" 
      style={styles.textInput} 
      onChangeText={text=>setNome(text)} 
      value={nome}/>

      <TextInput 
      placeholder="E-mail" 
      style={styles.textInput} 
      onChangeText={text=>setEmail(text)}
      value={email}/>

      <TextInput 
      placeholder="Telefone" 
      style={styles.textInput} 
      onChangeText={text=>setTelefone(text)}
      value={telefone}/>

      <TextInput 
      secureTextEntry={true} 
      placeholder="Senha" 
      style={styles.textInput} 
      onChangeText={text=>setSenha(text)}
      value={senha}/>

      <TouchableOpacity style={styles.btnCadastro} onPress={cadastrar}>
        <Text style={{color:'white', textAlign:'center'}}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={telaLogin}>
        <Text style={{color:'white', textAlign:'center'}}>FAZER LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}


