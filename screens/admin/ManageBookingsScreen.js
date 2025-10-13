import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

export default function ManageBookingsScreen() {
  const [search, setSearch] = useState('');
  const [bookings, setBookings] = useState([
    { id: '1', cliente: 'Carlos Pérez', estado: 'Confirmada', fecha: '2025-10-02' },
    { id: '2', cliente: 'Ana López', estado: 'Pendiente', fecha: '2025-10-04' },
  ]);

  const filtered = bookings.filter((b) =>
    b.cliente.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Reservas</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar por cliente..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.cliente} ({item.estado})</Text>
            <Button title="Cancelar" color="#990000" onPress={() => alert('Reserva cancelada')} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: '700', color: '#003366', marginBottom: 10 },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
