import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function BookingSummaryScreen({ navigation, route }) {
  const { checkIn, checkOut, guests, roomType, price } = route.params;
  const nights = 2; // Simulación para MVP
  const total = price * nights;
  const initialPayment = total * 0.3;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de Reserva</Text>
      <Text>Habitación: {roomType}</Text>
      <Text>Entrada: {checkIn}</Text>
      <Text>Salida: {checkOut}</Text>
      <Text>Huéspedes: {guests}</Text>
      <Text>Noches: {nights}</Text>
      <Text>Total: ${total}</Text>
      <Text>Pago inicial (30%): ${initialPayment}</Text>

      <Button
        title="Ir al Pago"
        color="#003366"
        onPress={() => navigation.navigate('Pago', { total, initialPayment })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
});
