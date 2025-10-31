import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function EditRecipeScreen({ route, navigation }) {
  const existing = route.params?.recipe || {};
  const [title, setTitle] = useState(existing.title || '');
  const [time, setTime] = useState(existing.time || '');
  const [ingredients, setIngredients] = useState(existing.ingredients ? existing.ingredients.join('\n') : '');
  const [instructions, setInstructions] = useState(existing.instructions ? existing.instructions.join('\n') : '');

  const handleSave = () => {
    // Aqui salvaria via API. Por enquanto só avisa e volta.
    Alert.alert('Salvo', 'Receita salva com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18 }}>Editar Receita</Text>

      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Tempo de preparo" value={time} onChangeText={setTime} />

      <Text style={{ marginTop: 8, fontWeight: '600' }}>Ingredientes (uma por linha)</Text>
      <TextInput multiline numberOfLines={4} style={[styles.input, { height: 120 }]} value={ingredients} onChangeText={setIngredients} />

      <Text style={{ marginTop: 8, fontWeight: '600' }}>Modo de preparo (uma por linha)</Text>
      <TextInput multiline numberOfLines={6} style={[styles.input, { height: 160 }]} value={instructions} onChangeText={setInstructions} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...styles.bigButton, backgroundColor: COLORS.danger, flex: 0.47 }}>
          <Text style={styles.bigButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave} style={{ ...styles.bigButton, backgroundColor: COLORS.success, flex: 0.47 }}>
          <Text style={styles.bigButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}