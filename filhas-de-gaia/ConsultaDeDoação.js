import React { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function ConsultaDeDoação(){
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // nav p/ tela da bia
    // navigation.navigate('Resultado', { user: userData });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="insira nome do usuário"
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});
}
