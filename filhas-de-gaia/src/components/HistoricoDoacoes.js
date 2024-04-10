import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoricoDoacoes() {
  const doacoes = [
    { nome: 'Doação 1', data: '10/03/2024', valor: 'R$ 50,00' },
    { nome: 'Doação 2', data: '15/03/2024', valor: 'R$ 100,00' }
    // Adicione mais doações conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Histórico de Doações</Text>
      <View style={styles.doacoesContainer}>
        {doacoes.map((doacao, index) => (
          <View key={index} style={styles.doacao}>
            <Text style={styles.nome}>{doacao.nome}</Text>
            <Text>Data: {doacao.data}</Text>
            <Text>Valor: {doacao.valor}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  doacoesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  doacao: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  nome: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
