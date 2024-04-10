import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [doacoes, setDoacoes] = useState([]);
  const [nome, setNome] = useState('');
  const [material, setMaterial] = useState('');
  const [info, setInfo] = useState('');

  const adicionarDoacao = () => {
    setDoacoes([...doacoes, { nome: nome, material: material, info: info }]);
    setNome('');
    setMaterial('');
    setInfo('');
  }

  const DetalhesDaDoacao = ({ doacao }) => {
    return (
      <View style={styles.doacaoItem}>
        <Text><strong>Nome:</strong> {doacao.nome}</Text>
        <Text><strong>Material:</strong> {doacao.material}</Text>
        <Text><strong>Informações:</strong> {doacao.info}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Doações</Text>
      <FlatList
        data={doacoes}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { doacao: item })}>
            <DetalhesDaDoacao doacao={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.subtitulo}>Adicionar Doação</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={text => setNome(text)}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={material}
        onChangeText={text => setMaterial(text)}
        placeholder="Material"
      />
      <TextInput
        style={styles.input}
        value={info}
        onChangeText={text => setInfo(text)}
        placeholder="Informações"
      />
      <Button
        title="Adicionar Doação"
        onPress={adicionarDoacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  doacaoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
