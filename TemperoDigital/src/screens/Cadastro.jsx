import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Cadastro({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [uf, setUf] = useState("");
    const [logradouro, setLogradouro] = useState("");

    async function chamarCep() {
        if (cep.length === 8) {
            try {
                let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                let dadosRecebidos = await resposta.json();

                setLogradouro(dadosRecebidos.logradouro || "");
                setBairro(dadosRecebidos.bairro || "");
                setCidade(dadosRecebidos.localidade || "");
                setEstado(dadosRecebidos.estado || "");
                setUf(dadosRecebidos.uf || "");
            } catch (erro) {
                console.log(`Erro ao buscar o CEP: ${erro}`);
            }
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={styles.container}keyboardShouldPersistTaps="handled">
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.titlulo}>Dados gerais</Text>
                            <TextInput style={styles.input} value={nomeCompleto}onChangeText={setNomeCompleto} placeholder="Nome completo"placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={email}onChangeText={setEmail}placeholder="E-mail"placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={senha} onChangeText={setSenha} placeholder="Senha"placeholderTextColor="#aeadad"secureTextEntry/>

                            <Text style={styles.titlulo}>Endereço</Text>
                            <TextInput style={styles.input}value={cep}onChangeText={setCep}placeholder="CEP"placeholderTextColor="#aeadad"keyboardType="numeric"onBlur={chamarCep}/>
                            <TextInput style={styles.input}value={logradouro} onChangeText={setLogradouro} placeholder="Nome da Rua"placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={bairro}onChangeText={setBairro}placeholder="Bairro" placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={cidade}onChangeText={setCidade}placeholder="Cidade"placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={uf}onChangeText={setUf}placeholder="UF"placeholderTextColor="#aeadad"/>
                            <TextInput style={styles.input}value={estado}onChangeText={setEstado}placeholder="Estado"placeholderTextColor="#aeadad"/>

                            <View style={styles.botaoContainer}>
                                <Button title="Cadastrar"color="#ff238a" onPress={() => navigation.navigate("Login")}/>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
    },
    titlulo: {
        fontSize: 24,
        color: "#ff238a",
    },
  
    input: {
        height: 50,
        width: "100%",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fff",
        elevation: 2,
    },
    botaoContainer: {
        width: "100%",
        marginTop: 20,
        borderRadius: 25,
    },

});

export default Cadastro;