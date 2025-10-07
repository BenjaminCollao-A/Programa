// src/screens/DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import MetricCard from '../components/MetricCard';
import ReservationCard from '../components/ReservationCard';
import { metrics } from '../data/metrics';

const mockReservations = [
  { id: 'r1', title: 'Reserva #1234', status: 'Confirmada', date: '12/07/2024' },
  { id: 'r2', title: 'Reserva #5678', status: 'Pendiente', date: '15/07/2024' },
  { id: 'r3', title: 'Reserva #9012', status: 'Cancelada', date: '20/07/2024' }
];

export default function DashboardScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula carga de métricas
    setTimeout(() => {
      setData({ ...metrics });
    }, 700);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <Text style={styles.sectionTitle}>Métricas Clave</Text>
      <View>
        <MetricCard title="Ocupación Actual" value={`${data ? data.occupancyCurrent + '%' : '...'}`} />
        <MetricCard title="Próximas Reservas" value={data ? data.upcomingReservations : '...'} />
        <MetricCard title="Ingresos" value={data ? `$${data.revenue}` : '...'} />
      </View>

      <Text style={styles.sectionTitle}>Ocupación</Text>
      <View style={styles.chartBox}>
        {/* Gráfica simple: aquí mostramos un placeholder.
            Para gráficos reales, integrar victory-native o react-native-svg */}
        <View style={styles.chartPlaceholder}>
          <Text style={{ color: '#6B7280' }}>Gráfica de ocupación (placeholder)</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Reservas Recientes</Text>
      <View>
        {mockReservations.map(r => <ReservationCard key={r.id} reservation={r} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.grayLight },
  header: { fontSize: 20, fontWeight: '700', color: colors.textDark, marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.textDark, marginTop: 12, marginBottom: 8 },
  chartBox: { backgroundColor: colors.white, borderRadius: 10, padding: 12, elevation: 2, marginBottom: 12 },
  chartPlaceholder: { height: 140, alignItems: 'center', justifyContent: 'center' }
});
