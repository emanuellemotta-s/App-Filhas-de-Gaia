import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/components/Cadastro/index';
import Login from './src/components/Login/index';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicial from './src/components/TelaInicial';
import { ModalPortal } from "react-native-modals";
import TelaDeHabitos from './src/components/TelaDeHabitos';
import TelaInicialAdm from './src/components/TelaInicialAdm';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <>
    <Stack.Navigator>
      <Stack.Screen name='TelaInicialAdm' component={TelaInicialAdm} screenOptions={{header: {headerShown: false}}}/>
      <Stack.Screen name='TelaDeHabitos' component={TelaDeHabitos} screenOptions={{header: {headerShown: false}}}/>
      <Stack.Screen name='TelaInicial' component={TelaInicial} screenOptions={{header: {headerShown: false}}}/>
      <Stack.Screen name='Login' component={Login} screenOptions={{header: {headerShown: false}}}/>
      <Stack.Screen name='Cadastro' component={Cadastro} screenOptions={{headerShown: false}}/>
    </Stack.Navigator>
    <ModalPortal/>
    </>
  );
}

export default function App() {

  return(
    <NavigationContainer>
      <StatusBar hidden/>
      <MyStack/>
    </NavigationContainer>
  );
  
  
}

