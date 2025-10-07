// src/components/RoomCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function RoomCard({ room }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: room.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{room.name}</Text>
        <Text style={styles.price}>${room.price}/noche</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  price: {
    marginVertical: 5,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: '600',
  },
});
