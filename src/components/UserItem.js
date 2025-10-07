// src/components/UserItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';

export default function UserItem({ user, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(user)}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={20} color="#6B7280" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2
  },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  name: { fontWeight: '700', color: colors.textDark },
  role: { color: '#6B7280', marginTop: 2 }
});
