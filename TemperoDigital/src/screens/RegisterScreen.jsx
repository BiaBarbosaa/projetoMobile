import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleRegister = () => {
    // aqui normalmente chamaria API. Por enquanto só navega pra Home
    navigation.replace('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
      <View style={{ alignItems: 'center', marginBottom: 18 }}>
        <Text style={[styles.title, { color: COLORS.card }]}>Cadastrar sua conta</Text>
      </View>

      <View style={{ marginBottom: 18 }}>
        <TextInput placeholder="Digite seu nome completo" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="Digite seu e-mail" style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={pass} onChangeText={setPass} />
      </View>

      <TouchableOpacity style={styles.bigButton} onPress={handleRegister}>
        <Text style={styles.bigButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
        <Text style={styles.smallText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: COLORS.accent, fontWeight: '600' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}