import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles, { COLORS } from '../styles/styles';

export default function RecipeScreen({ route, navigation }) {
  const recipe = route.params?.recipe || {
    title: 'Bife Clássico',
    time: '45 minutos',
    ingredients: [
      '4 cortes de bife (ex: contrafilé)',
      'Sal e pimenta a gosto',
      '2 colheres de sopa de azeite'
    ],
    instructions: [
      'Tempere os bifes com sal e pimenta.',
      'Aqueça a frigideira com azeite.',
      'Grelhe os bifes no ponto desejado.'
    ]
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      {/* <Image source={require('../../assets/placeholder.jpg')} style={{ width: '100%', height: 220 }} resizeMode="cover" /> */}
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>{recipe.title}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditRecipe', { recipe })} style={{ backgroundColor: COLORS.card, padding: 8, borderRadius: 10 }}>
            <Text>Editar</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 8, color: COLORS.muted }}>{recipe.time}</Text>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Ingredientes</Text>
          {/* <View style={{ backgroundColor: COLORS.card, borderRadius: 12, padding: 12 }}>
            {recipe.ingredients.map((ing, i) => (
              <Text key={i} style={{ marginBottom: 6 }}>• {ing}</Text>
            ))}
          </View> */}
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Modo de preparo</Text>
          {/* <View style={{ backgroundColor: COLORS.card, borderRadius: 12, padding: 12 }}>
            {recipe.instructions.map((step, i) => (
              <Text key={i} style={{ marginBottom: 8 }}>{i + 1}. {step}</Text>
            ))}
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
}