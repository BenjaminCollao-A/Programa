import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function ReportsScreen() {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [{ data: [20, 35, 40, 25, 50] }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportes de Ocupación</Text>

      <BarChart
        data={data}
        width={Dimensions.get('window').width - 20}
        height={220}
        yAxisLabel="%"
        chartConfig={{
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
        }}
        verticalLabelRotation={0}
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
    marginBottom: 20,
    textAlign: 'center',
  },
});
