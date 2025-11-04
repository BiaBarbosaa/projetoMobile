import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';

const Cadastrar = ({ navigation }) => {
  // const [mensagem, setMensagem] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    tempo_preparo: '',
    ingredientes: '',
    modo_preparo: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastrar = async () => {
    if (!formData.nome || !formData.tempo_preparo || !formData.ingredientes || !formData.modo_preparo) {
      setMensagem('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3002/cadastrar', formData);

      if (response.status === 201) {
        setFormData('')
        setMensagem('Cadastro efetuado com sucesso!!!');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          setMensagem('Erro de autenticação ao cadastrar!');
        } else {
          console.log(error)
          setMensagem('Erro ao cadastrar');
        }
      } else if (error.request) {
        setMensagem('Não foi possível conectar-se ao servidor. Verifique sua conexão ou se a API está ativa.');
      } else {
        setMensagem('Erro inesperado: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
        <Text style={styles.titulo}>Nova Receita</Text>
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
              value={formData.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
              
              />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tempo de Preparo</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange('tempo_preparo', text)}
              value={formData.tempo_preparo}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ingredientes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              onChangeText={(text) => handleInputChange('ingredientes', text)}
        value={formData.ingredientes}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Modo de Preparo</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              onChangeText={(text) => handleInputChange('modo_preparo', text)}
              value={formData.modo_preparo}
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
          onPress={handleCadastrar}          
        >
          <Text style={styles.textoBotaoSalvar}>Salvar Receita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

export default Cadastrar;
