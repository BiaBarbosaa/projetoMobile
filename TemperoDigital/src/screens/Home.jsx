import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Home({ navigation }) {
  const sair = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerUsuario}>
        <Text style={styles.titulo}>Olá, Ana</Text>
        <Text style={styles.subtitulo}>O que você deseja cozinhar hoje?</Text>
      </View>

      <View style={styles.containerNova}>
        <View style={styles.containerNovaReceita}>
        <Text>Tempero Digital</Text>
        <Text>Guarde, edite e organize suas receitas favoritas!</Text>
        </View>
      </View>

      <View style={styles.containerReceitas}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // backgroundColor: "#23ffe9",
  },
  containerUsuario: {
    flex: 1,
    // backgroundColor: "#23ff2a",
  },
  containerNova: {
    flex: 2,
   backgroundColor: "#ff2340",
   marginBottom:30,
  },
  containerReceitas: {
    flex: 3,
    backgroundColor: "#edff23",
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 15,
    color: "#B7B7B7",
  },
  containerNovaReceita:{
    height:200,
    backgroundColor:"#e9e7e7",
    borderRadius:30,
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#000000'
  }

});

export default Home;