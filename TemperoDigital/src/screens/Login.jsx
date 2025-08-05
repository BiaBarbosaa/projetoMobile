import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "@react-native-vector-icons/ionicons";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
    try {
      const response = await fetch("https://devgarca.com.br/mobile/api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha
        })
      });

      const data = await response.json();

      if (data.success) {
      
        navigation.reset({
          index: 0,
          routes: [{ name: 'Rotas' }], // Ou 'Home', etc.
        });
      } else {
        Alert.alert("Erro", data.message || "Login falhou");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Icon name="person-circle-sharp" size={150} color="#ff238a" style={styles.icone} />
            <Text style={styles.titlulo}>Login</Text>        
            <TextInput 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              placeholder="E-mail"
              placeholderTextColor="#aeadad"
            />    
            <TextInput 
              style={styles.input}
              value={senha} 
              onChangeText={setSenha}
              placeholder="Senha" 
              placeholderTextColor="#aeadad"
              secureTextEntry
            />
            
            <View style={styles.botaoContainer}>
              <Button title="Entrar" onPress={fazerLogin} color="#ff238a"/>
            </View>
            
            <TouchableOpacity 
              style={styles.link} 
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Text style={styles.textoLink}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 15,
  },
  titlulo: {
    fontSize: 25,
    color: "#ff238a",
    marginBottom: 10,
  },
  icone: {
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffff",
    borderColor: "#d7d6d6",
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 25,
  },
  botaoContainer: {
    width: "100%",
    marginTop: 20,
    borderRadius: 25,
  },
  link: {
    marginTop: 20,
  },
  textoLink: {
    color: "#ff238a",
    fontSize: 15,
  },
});

export default Login;