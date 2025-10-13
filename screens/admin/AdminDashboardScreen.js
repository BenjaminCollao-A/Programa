import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function AdminDashboardScreen() {
  const data = {
    labels: ['Ocupación', 'Ingresos', 'Reservas'],
    data: [0.75, 0.5, 0.9],
  };

  const metrics = [
    { id: '1', name: 'Ocupación Actual', value: '75%' },
    { id: '2', name: 'Próximas Reservas', value: '18' },
    { id: '3', name: 'Ingresos del Mes', value: '$4,500' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel Administrativo</Text>

      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 20}
        height={180}
        strokeWidth={16}
        radius={40}
        chartConfig={{
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
        }}
      />

      <FlatList
        data={metrics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.metricName}>{item.name}</Text>
            <Text style={styles.metricValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 2,
  },
  metricName: { fontSize: 16, color: '#555' },
  metricValue: { fontSize: 18, fontWeight: '700', color: '#003366' },
});
