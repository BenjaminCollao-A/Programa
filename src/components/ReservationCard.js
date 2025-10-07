// src/components/ReservationCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function ReservationCard({ reservation }) {
  const statusStyle = {
    Confirmada: { backgroundColor: '#E6FDEB', color: colors.success },
    Pendiente: { backgroundColor: '#FFF7E6', color: colors.warning },
    Cancelada: { backgroundColor: '#FCEAEA', color: colors.danger }
  }[reservation.status] || { backgroundColor: '#F3F4F6', color: '#6B7280' };

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>{reservation.title}</Text>
        <Text style={[styles.badge, { backgroundColor: statusStyle.backgroundColor, color: statusStyle.color }]}>{reservation.status}</Text>
      </View>
      <Text style={styles.date}>{reservation.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  title: { fontWeight: '600', color: colors.textDark },
  date: { color: '#6B7280', marginTop: 6 },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600'
  }
});
