import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

export default function ManageUsersScreen() {
  const [users, setUsers] = useState([
    { id: '1', name: 'Carlos Pérez', role: 'Cliente' },
    { id: '2', name: 'Ana López', role: 'Empleado' },
    { id: '3', name: 'María Torres', role: 'Cliente' },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    Alert.alert('Usuario eliminado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Usuarios</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.name} - {item.role}</Text>
            <Button title="Eliminar" color="#990000" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  title: { fontSize: 22, fontWeight: '700', color: '#003366', marginBottom: 10 },
  row: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: { fontSize: 16 },
});
