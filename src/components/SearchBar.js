// src/components/SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function SearchBar({ onSearch }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Fecha de Entrada"
        value={checkIn}
        onChangeText={setCheckIn}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Salida"
        value={checkOut}
        onChangeText={setCheckOut}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Huéspedes"
        value={guests}
        onChangeText={setGuests}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch({ checkIn, checkOut, guests })}>
        <Text style={styles.buttonText}>Buscar Disponibilidad</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 12,
    margin: 10,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: '600',
  },
});
