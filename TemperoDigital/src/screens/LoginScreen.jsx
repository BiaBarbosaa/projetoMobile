import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    // aqui vai validação / API -> depois navegar pra MainTabs
    navigation.replace('MainTabs');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={[styles.title, { marginBottom: 6 }]}>Bem vindo de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={{ marginTop: 18 }}>
        <TextInput placeholder="Digite seu e-mail" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Senha" style={styles.input} value={pass} secureTextEntry onChangeText={setPass} />
      </View>

      <TouchableOpacity style={styles.bigButton} onPress={handleLogin}>
        <Text style={styles.bigButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
        <Text style={styles.smallText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: COLORS.accent, fontWeight: '600' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}