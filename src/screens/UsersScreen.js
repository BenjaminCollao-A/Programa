// src/screens/UsersScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import UserItem from '../components/UserItem';
import { users as usersData } from '../data/users';
import { Ionicons } from '@expo/vector-icons';

export default function UsersScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    // Simula fetch
    setTimeout(() => setList(usersData), 500);
  }, []);

  const filtered = list.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textDark} />
        </TouchableOpacity>
        <Text style={styles.title}>Usuarios</Text>
      </View>

      <TextInput
        placeholder="Buscar usuarios..."
        value={query}
        onChangeText={setQuery}
        style={styles.search}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem user={item} onPress={() => {}} />}
        contentContainerStyle={{ paddingTop: 10 }}
      />

      <TouchableOpacity style={styles.fab} onPress={() => alert('Agregar usuario (pendiente)')}>
        <Ionicons name="add" size={28} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.grayLight },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  title: { fontSize: 18, fontWeight: '700', marginLeft: 12, color: colors.textDark },
  search: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    elevation: 2
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 22,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6
  }
});
