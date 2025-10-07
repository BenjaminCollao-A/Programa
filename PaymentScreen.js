import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function PaymentScreen({ navigation, route }) {
  const { total, initialPayment } = route.params;

  const handlePayment = () => {
    Alert.alert('Pago exitoso', 'Tu reserva ha sido confirmada.');
    navigation.navigate('Confirmación', { total, initialPayment });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pago</Text>
      <Text>Total a pagar: ${total}</Text>
      <Text>Pago inicial (30%): ${initialPayment}</Text>

      <Button title="Confirmar Pago" color="#003366" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', color: '#003366', marginBottom: 20 },
});
