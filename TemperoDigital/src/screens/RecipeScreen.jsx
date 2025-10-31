import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function RecipeScreen({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [tempo, setTempo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const cadastrarReceita = async () => {
    // Validação
    if (!titulo.trim() || !tempo.trim() || !ingredientes.trim() || !modoPreparo.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }

    const novaReceita = {
      titulo,
      tempo,
      ingredientes: ingredientes.split('\n').filter(i => i.trim() !== ''),
      modoPreparo: modoPreparo.split('\n').filter(i => i.trim() !== '')
    };

    try {
      // Opção 1: Salvar no backend
      const response = await fetch('http://localhost:3001/receitas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaReceita)
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
        navigation.goBack();
      } else {
        throw new Error('Erro ao cadastrar receita');
      }
    } catch (error) {
      console.error('Erro ao cadastrar receita:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar a receita');
    }

    // Opção 2: Salvar no AsyncStorage (descomente se preferir usar AsyncStorage)
    /*
    try {
      const receitasJSON = await AsyncStorage.getItem('receitas');
      const receitas = receitasJSON ? JSON.parse(receitasJSON) : [];
      
      novaReceita.id = Date.now().toString();
      receitas.push(novaReceita);
      
      await AsyncStorage.setItem('receitas', JSON.stringify(receitas));
      Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar receita:', error);
      Alert.alert('Erro', 'Não foi possível salvar a receita');
    }
    */
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={{ padding: 16 }}>
        {/* Cabeçalho */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700' }}>Nova Receita</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: COLORS.muted, fontSize: 16 }}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {/* Título */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Título da Receita</Text>
          <TextInput
            style={{
              backgroundColor: COLORS.card,
              borderRadius: 12,
              padding: 12,
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#e0e0e0'
            }}
            placeholder="Ex: Bife Clássico"
            value={titulo}
            onChangeText={setTitulo}
          />
        </View>

        {/* Tempo de Preparo */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Tempo de Preparo</Text>
          <TextInput
            style={{
              backgroundColor: COLORS.card,
              borderRadius: 12,
              padding: 12,
              fontSize: 16,
              borderWidth: 1,
              borderColor: '#e0e0e0'
            }}
            placeholder="Ex: 45 minutos"
            value={tempo}
            onChangeText={setTempo}
          />
        </View>

        {/* Ingredientes */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Ingredientes</Text>
          <Text style={{ fontSize: 12, color: COLORS.muted, marginBottom: 6 }}>
            Digite cada ingrediente em uma linha separada
          </Text>
          <TextInput
            style={{
              backgroundColor: COLORS.card,
              borderRadius: 12,
              padding: 12,
              fontSize: 16,
              minHeight: 120,
              textAlignVertical: 'top',
              borderWidth: 1,
              borderColor: '#e0e0e0'
            }}
            placeholder="4 cortes de bife
Sal e pimenta a gosto
2 colheres de sopa de azeite"
            value={ingredientes}
            onChangeText={setIngredientes}
            multiline
            numberOfLines={6}
          />
        </View>

        {/* Modo de Preparo */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Modo de Preparo</Text>
          <Text style={{ fontSize: 12, color: COLORS.muted, marginBottom: 6 }}>
            Digite cada passo em uma linha separada
          </Text>
          <TextInput
            style={{
              backgroundColor: COLORS.card,
              borderRadius: 12,
              padding: 12,
              fontSize: 16,
              minHeight: 150,
              textAlignVertical: 'top',
              borderWidth: 1,
              borderColor: '#e0e0e0'
            }}
            placeholder="Tempere os bifes com sal e pimenta
Aqueça a frigideira com azeite
Grelhe os bifes no ponto desejado"
            value={modoPreparo}
            onChangeText={setModoPreparo}
            multiline
            numberOfLines={8}
          />
        </View>

        {/* Botão de Salvar */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.accent,
            padding: 16,
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 30
          }}
          onPress={cadastrarReceita}
        >
          <Text style={{ fontWeight: '700', fontSize: 16 }}>Salvar Receita</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
