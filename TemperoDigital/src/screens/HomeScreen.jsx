import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles, { COLORS } from '../styles/styles';
import RecipeCard from '../components/RecipeCard';

export default function HomeScreen({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  // Função para carregar receitas do AsyncStorage
  const carregarReceitas = async () => {
    try {
      const receitasJSON = await AsyncStorage.getItem('receitas');
      if (receitasJSON) {
        const receitasParsed = JSON.parse(receitasJSON);
        setReceitas(receitasParsed);
      }
    } catch (error) {
      console.error('Erro ao carregar receitas:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarReceitas();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>Olá, Ana</Text>
          <Text style={styles.subtitle}>O que você quer cozinhar hoje?</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: COLORS.card, padding: 8, borderRadius: 20 }}>
          <Text style={{ fontWeight: '700' }}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 8 }}>
        <TouchableOpacity style={{ ...styles.card, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontWeight: '700' }}>Tempero Digital</Text>
            <Text style={styles.smallText}>Guarde, edite e organize suas receitas</Text>
          </View>
          <TouchableOpacity 
            style={{ backgroundColor: COLORS.accent, padding: 8, borderRadius: 10 }} 
            onPress={() => navigation.navigate("RecipeScreen")}
          >
            <Text style={{ fontWeight: '700' }}>+ Nova Receita</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: '700', marginTop: 6 }}>Receitas</Text>

      {receitas.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <Text style={styles.subtitle}>Nenhuma receita cadastrada ainda</Text>
          <Text style={styles.smallText}>Clique em "+ Nova Receita" para começar</Text>
        </View>
      ) : (
        <FlatList
          data={receitas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard item={item} onPress={() => navigation.navigate('Recipe', { recipe: item })} />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}