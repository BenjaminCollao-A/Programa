import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulación de credenciales
    if (email === 'admin@hotel.com' && password === '1234') {
      navigation.replace('AdminStack'); // Rol administrador
    } else if (email === 'cliente@hotel.com' && password === '1234') {
      navigation.replace('ClientStack'); // Rol cliente
    } else {
      Alert.alert('Credenciales incorrectas', 'Por favor, verifica tus datos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Azul Marino</Text>
      <Text style={styles.subtitle}>Sistema de Reservas</Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.demo}>
        🧩 Usa:  
        admin@hotel.com / 1234 (Administrador)  
        cliente@hotel.com / 1234 (Cliente)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 28, color: '#fff', fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#ccc', marginBottom: 30 },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#0055aa',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  demo: {
    color: '#fff',
    marginTop: 30,
    fontSize: 13,
    textAlign: 'center',
  },
});
