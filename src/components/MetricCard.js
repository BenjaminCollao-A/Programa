// src/components/MetricCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function MetricCard({ title, value, subtitle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  title: {
    fontSize: 13,
    color: '#6B7280'
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 6
  },
  subtitle: {
    marginTop: 6,
    color: '#10B981'
  }
});
