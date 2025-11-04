import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView } from 'react-native';
import axios from 'axios';

const Atualizar = ({ navigation, route}) => {
  const [nome, setNome] = useState('');
  const [tempo_preparo, setTempo_preparo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modo_preparo, setModo_preparo] = useState('');

  const id = route.params.id;

  console.log(id);

  const handleAtualizar = () => {
    if (!nome || !tempo_preparo || !ingredientes || !modo_preparo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const data = {
      nome,
      tempo_preparo,
      ingredientes,
      modo_preparo
    };

    axios.patch(`http://10.0.2.2:3001/atualizar/${id}`, data)
      .then(response => {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        setNome('');
        setTempo_preparo('');
        setIngredientes('');
        setModo_preparo('');

        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.log(error);
          Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
        } else {
          console.log(error);

          Alert.alert('Erro', 'Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente.');
        }
      });      
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              </TouchableOpacity>
              <Text style={styles.titulo}>Atualizar Receita</Text>
              <View style={{ width: 28 }} />
            </View>
      
            <ScrollView 
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.containerForm}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nome da Receita</Text>
                  
                  <TextInput
                    style={styles.input}
                    value={setNome}
                    onChangeText={setNome}
                    
                    />
                </View>
      
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Tempo de Preparo</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={setTempo_preparo}
                    value={setTempo_preparo}
                  />
                </View>
      
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Ingredientes</Text>
                  <TextInput
                    style={[styles.input, styles.textArea]}
                    onChangeText={setIngredientes}
              value={setIngredientes}
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                  />
                </View>
      
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Modo de Preparo</Text>
                  <TextInput
                    style={[styles.input, styles.textArea]}
                    onChangeText={setModo_preparo}
                    value={setModo_preparo}
                    multiline
                    numberOfLines={8}
                    textAlignVertical="top"
                  />
                </View>
              </View>
            </ScrollView>




      <View style={styles.containerBotoes}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
              </TouchableOpacity>
      
              <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={handleAtualizar}          
              >
                <Text style={styles.textoBotaoSalvar}>Atualizar Receita</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 25,
  },
  containerForm: {
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    padding: 15,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  textArea: {
    minHeight: 120,
    paddingTop: 15,
  },
  containerBotoes: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 15,
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
  },
  botaoCancelar: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoCancelar: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
  botaoSalvar: {
    flex: 1,
    backgroundColor: "#F8E7C1",
    borderWidth: 1,
    borderColor: "#E6AF2E",
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    overflow: 'visible',
  },
  textoBotaoSalvar: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
});

export default Atualizar;