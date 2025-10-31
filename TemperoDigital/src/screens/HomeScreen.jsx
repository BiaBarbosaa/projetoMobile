import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles, { COLORS } from '../styles/styles';
import RecipeCard from '../components/RecipeCard';

const sampleData = [
  { id: '1', title: 'Espaguete à bolonhesa', time: '30–45 minutos', image: null },
  { id: '2', title: 'Bife Clássico', time: '45 minutos', image: null },
  { id: '3', title: 'Salada Mediterrânea', time: '10 minutos', image: null }
];

export default function HomeScreen({ navigation }) {
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
          <TouchableOpacity style={{ backgroundColor: COLORS.accent, padding: 8, borderRadius: 10 }} onPress={() => navigation.navigate("RecipeScreen")}>
            <Text style={{ fontWeight: '700' }}>+ Nova Receita</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: '700', marginTop: 6 }}>Receitas</Text>

      <FlatList
        data={sampleData}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <RecipeCard item={item} onPress={() => navigation.navigate('Recipe', { recipe: item })} />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}