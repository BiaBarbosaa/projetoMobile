import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function RecipeCard({ item, onPress }) {
  return (
    <TouchableOpacity style={[styles.card, { flexDirection: 'row', alignItems: 'center' }]} onPress={onPress}>
      {/* <Image source={item.image || require('../../assets/placeholder.jpg')} style={{ width: 80, height: 80, borderRadius: 10, marginRight: 12 }} /> */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>{item.title}</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>{item.time} • {item.tag || 'Receita'}</Text>
      </View>
    </TouchableOpacity>
  );
}