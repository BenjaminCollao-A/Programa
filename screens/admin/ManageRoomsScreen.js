import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ManageRoomsScreen() {
  const [suite, setSuite] = useState('150');
  const [doble, setDoble] = useState('100');
  const [individual, setIndividual] = useState('70');

  const handleSave = () => {
    Alert.alert('Tarifas actualizadas', 'Los precios han sido guardados correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Habitaciones y Tarifas</Text>

      <Text style={styles.label}>Suite</Text>
      <TextInput style={styles.input} value={suite} onChangeText={setSuite} keyboardType="numeric" />

      <Text style={styles.label}>Doble</Text>
      <TextInput style={styles.input} value={doble} onChangeText={setDoble} keyboardType="numeric" />

      <Text style={styles.label}>Individual</Text>
      <TextInput style={styles.input} value={individual} onChangeText={setIndividual} keyboardType="numeric" />

      <Button title="Guardar Cambios" color="#003366" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: '700', color: '#003366', marginBottom: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
});
