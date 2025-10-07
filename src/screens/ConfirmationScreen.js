import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ConfirmationScreen({ route }) {
  const { total, initialPayment } = route.params;
  const bookingCode = 'RES-' + Math.floor(Math.random() * 1000000);

  const handleSendEmail = () => {
    Alert.alert('Correo enviado', 'Tu comprobante ha sido enviado exitosamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva Confirmada</Text>
      <Text style={styles.text}>Código de Reserva:</Text>
      <Text style={styles.code}>{bookingCode}</Text>
      <QRCode value={bookingCode} size={150} />
      <Text style={styles.text}>Total: ${total}</Text>
      <Text style={styles.text}>Pago inicial: ${initialPayment}</Text>
      <Button title="Enviar al correo" color="#003366" onPress={handleSendEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', color: '#003366', marginBottom: 20 },
  text: { fontSize: 16, marginVertical: 5 },
  code: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
});
