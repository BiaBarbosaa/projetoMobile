import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Atualizar = ({ navigation, route}) => {
  const [nome, setNome] = useState('');
  const [tempo, setTempo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparo, setPreparo] = useState('');

  const id = route.params.id;

  console.log(id);

  const handleAtualizar = () => {
    if (!nome || !tempo || !ingredientes || !preparo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const data = {
      nome,
      tempo,
      ingredientes,
      preparo
    };

    axios.patch(`http://10.0.2.2:3001/atualizar/${id}`, data)
      .then(response => {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        setNome('');
        setTempo('');
        setIngredientes('');
        setPreparo('');

        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.log(error);
          Alert.alert('Erro', 'ID da receita não encontrado na base de dados.');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao atualizar a receita. Por favor, tente novamente.');
        }
      });      
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo"
        value={tempo}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="ingredientes"
        value={ingredientes}
        onChangeText={setIngredientes}
      />
      <TextInput
        style={styles.input}
        placeholder="preparo"
        value={preparo}
        onChangeText={setPreparo}
      />
      <View style={styles.buttonContainer}>
        <Button title="Atualizar" onPress={handleAtualizar} />
        <View style={styles.buttonSpacer} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 10,
  },
});

export default Atualizar;
