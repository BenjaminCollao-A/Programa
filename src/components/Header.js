// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>🏨 Hotel Paraíso</Text>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.link}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    marginRight: 10,
    color: colors.primary,
  },
  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  registerText: {
    color: colors.secondary,
    fontWeight: '600',
  },
});
