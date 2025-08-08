import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CadastrarReceita({ navigation }) {
  return (
    <View style={styles.container}>

<View style={styles.containerUsuario}>
        <View style={styles.headerContent}>
          <View style={styles.textContent}>
            <Text style={styles.titulo}>Olá, Ana</Text>
            <Text style={styles.subtitulo}>O que você deseja cozinhar hoje?</Text>
          </View>
          <Icon name="chevron-back-circle" size={40} color="#000" style={styles.userIcon} />
        </View>
      </View>

      <View style={styles.containerNova}>
        <View style={styles.containerNovaReceita}>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.tituloContainer}>Tempero Digital</Text>
              <Text style={styles.textoInfo}>Guarde, edite e organize suas receitas favoritas!</Text>
            </View>
            <Image
              source={require('../../res/img/icon.png')}
              style={styles.imagem}
            />
          </View>
          <TouchableOpacity
            style={styles.botaoNovaReceita}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.textoBotao}>+   Nova Receita</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerReceitas}>
      <Text style={styles.titulo2}>Receitas</Text>


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
   // backgroundColor: "#e4f572",
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
  // userIcon: {
  //   marginLeft: 10, 
  // },
  
  containerNova: {
    flex: 2,
    marginBottom: 30,
    //backgroundColor: "#f57272",
  },
  containerReceitas: {
  //  backgroundColor: "#ff3697",
    flex: 3,
  },
  titulo: {
    fontSize: 30,
    fontFamily: "PinyonScript-Regular",
    fontWeight:"bold",
    marginTop: 5,

  },
  titulo2: {
    fontSize: 23,
    fontWeight:"bold",
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
   // backgroundColor: "#5bbe31",
  },
  textContainer: {
    flex: 1,
    //backgroundColor: "#b065de",
  },
  tituloContainer: {
    fontSize: 18,
    marginBottom: 5,
    // backgroundColor: "#dbc72f",
  },
  textoInfo: {
    fontSize: 14,
    color: "#828686",
    //backgroundColor: "#f635a2",
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  botaoNovaReceita: {
    backgroundColor: "#f43ec3",
    borderWidth: 1,               // OBRIGATÓRIO
    borderColor: "#E6AF2E",       
    borderStyle: 'solid',         // Para iOS
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
    fontWeight: "semibold",
    fontFamily: "Poppins-Regular",
  },
});

export default CadastrarReceita;