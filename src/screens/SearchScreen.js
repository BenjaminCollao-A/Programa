import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    if (!checkIn || !checkOut || !guests) {
      alert('Por favor completa todos los campos');
      return;
    }
    navigation.navigate('Habitaciones', { checkIn, checkOut, guests });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Disponibilidad</Text>

      <TextInput
        style={styles.input}
        placeholder="Fecha de entrada (YYYY-MM-DD)"
        value={checkIn}
        onChangeText={setCheckIn}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de salida (YYYY-MM-DD)"
        value={checkOut}
        onChangeText={setCheckOut}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de huéspedes"
        keyboardType="numeric"
        value={guests}
        onChangeText={setGuests}
      />

      <Button title="Buscar" color="#003366" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#003366',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});
