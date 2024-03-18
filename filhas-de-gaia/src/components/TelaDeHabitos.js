import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function TelaDeHabitos() {
  
  // Estado para armazenar a lista de hábitos
  const [habitos, setHabitos] = useState([]);
  // Estado para armazenar o valor do novo hábito
  const [novoHabito, setNovoHabito] = useState('');
  // Estado para armazenar as doações pendentes
  const [doacoesPendentes, setDoacoesPendentes] = useState(0);

  // Função para adicionar um novo hábito à lista
  const adicionarHabito = () => {
    if (novoHabito.trim() !== '') {
      setHabitos([...habitos, novoHabito]);
      setNovoHabito('');
    }
  };

  // Função para remover um hábito da lista
  const removerHabito = (index) => {
    const novosHabitos = [...habitos];
    novosHabitos.splice(index, 1);
    setHabitos(novosHabitos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Hábitos</Text>

      {/* Lista de hábitos */}
      <FlatList
        data={habitos}
        renderItem={({ item, index }) => (
          <View style={styles.itemDeHabito}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => removerHabito(index)}>
              <Text style={styles.botaoDeRemover}>Apagar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Formulário para adicionar novo hábito */}
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          value={novoHabito}
          onChangeText={setNovoHabito}
          placeholder="Novo Hábito"
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarHabito}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Doações Pendentes */}
      <View style={styles.doacoesContainer}>
        <Text style={styles.tituloDoacoes}>Doações Pendentes: {doacoesPendentes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemDeHabito: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoDeRemover: {
    color: 'red',
    marginLeft: 10,
  },
  formulario: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#8cc9a6',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  doacoesContainer: {
    marginTop: 20,
    backgroundColor: '#d8a0cc',
    padding: 10,
    borderRadius: 5,
  },
  tituloDoacoes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#584153',
  },
});

