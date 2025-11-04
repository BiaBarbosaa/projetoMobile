import React, { useState, useEffect } from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity, FlatList,Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';

function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  const carregarReceitas = () => {
    axios.get('http://10.0.2.2:3002/listar')
      .then(response => {
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setReceitas(sortedData);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  useEffect(() => {
    carregarReceitas();
  }, []);

  const handleEditar = (id) => {
    navigation.navigate('Atualizar', { id });
  };

  const handleExcluir = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      `Tem certeza que deseja excluir a receita ?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            axios.delete(`http://10.0.2.2:3002/deletar/${id}`)
              .then(() => {
                Alert.alert('Sucesso', 'Receita excluída com sucesso.');
                carregarReceitas();
              })
              .catch(error => {
                console.log(error);
                Alert.alert('Erro', 'Erro ao excluir usuário.');
                console.log(error);
              });
          }
        }
      ]
    );
  };

  

  const renderReceita = ({ item }) => (
    <TouchableOpacity 
      style={styles.receitaCard}
      activeOpacity={0.7}
    >
      <View style={styles.receitaContent}>        
        <View style={styles.receitaInfo}>
          <Text style={styles.receitaNome}>
            {item.nome}
          </Text>
          <View style={styles.receitaDetalhes}>
            <Text style={styles.receitaTempo}>Tempo de preparo: {item.tempo_preparo}</Text>
          </View>
        </View>

        <View style={styles.acoesBotoes}>
          <TouchableOpacity
            style={styles.botaoAcao}
            onPress={() => handleEditar(item.id)}
          >
            <Icon name="create-outline" size={20} color="#007BFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoAcao}
            onPress={() => handleExcluir(item.id, item.nome)}
          >
            <Icon name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerUsuario}>
        <View style={styles.headerContent}>
          <View style={styles.textContent}>
            <Text style={styles.titulo}>Olá, cozinheiro</Text>
            <Text style={styles.subtitulo}>O que você deseja cozinhar hoje?</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerNova}>
        <View style={styles.containerNovaReceita}>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.tituloContainer}>Tempero Digital</Text>
              <Text style={styles.textoInfo}>
                Guarde, edite e organize suas receitas favoritas!
              </Text>
            </View>
            <Image
              source={require('../../res/img/icon.png')}
              style={styles.imagem}
            />
          </View>
          <TouchableOpacity
            style={styles.botaoNovaReceita}
            onPress={() => navigation.navigate("CadastrarReceita")}
          >
            <Text style={styles.textoBotao}>+   Nova Receita</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerReceitas}>
        <View style={styles.headerReceitas}>
          <Text style={styles.titulo2}>Receitas</Text>
        </View>

        <FlatList
          data={receitas}
          renderItem={renderReceita}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  containerUsuario: {
    width: "100%",
    height: "12%",
    marginBottom: 30,
    justifyContent: 'center', 
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15, 
  },
  textContent: {
    flex: 1, 
  },
  containerNova: {
    flex: 2,
    marginBottom: 30,
  },
  containerReceitas: {
    flex: 3,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },
  titulo2: {
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 15,
    color: "#B7B7B7",
  },
  containerNovaReceita: {
    height: 180,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    padding: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  tituloContainer: {
    fontSize: 18,
    marginBottom: 5,
  },
  textoInfo: {
    fontSize: 14,
    color: "#828686",
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  botaoNovaReceita: {
    backgroundColor: "#F8E7C1",
    borderWidth: 1,
    borderColor: "#E6AF2E",       
    borderStyle: 'solid',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    overflow: 'visible'  
  },
  textoBotao: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
  headerReceitas: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  receitaCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  receitaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
 
  receitaInfo: {
    flex: 1,
  },
  receitaNome: {
    fontSize: 20,
    fontWeight: "semi-bold",
    color: "#000",
    marginBottom: 5,
  },
  receitaDetalhes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  receitaTempo: {
    fontSize: 13,
    color: "#697474",
    marginLeft: 5,
  },
  acoesBotoes: {
    flexDirection: 'row',
    gap: 8,
  },
  botaoAcao: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8F8F8",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  textoVazio: {
    fontSize: 18,
    fontWeight: "600",
    color: "#828686",
    marginTop: 15,
  },
  subtextoVazio: {
    fontSize: 14,
    color: "#B7B7B7",
    marginTop: 5,
  },
});

export default Home;
