import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

export default function RoomsCatalogScreen({ navigation, route }) {
  const { checkIn, checkOut, guests } = route.params;

  const rooms = [
    { id: '1', type: 'Suite', price: 150, image: require('../assets/rooms/suite.jpg') },
    { id: '2', type: 'Doble', price: 100, image: require('../assets/rooms/doble.jpg') },
    { id: '3', type: 'Individual', price: 70, image: require('../assets/rooms/individual.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habitaciones Disponibles</Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.price}>${item.price} / noche</Text>
            <Button
              title="Reservar"
              color="#003366"
              onPress={() => navigation.navigate('Resumen', {
                ...route.params,
                roomType: item.type,
                price: item.price,
              })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  image: { width: '100%', height: 180 },
  type: { fontSize: 18, fontWeight: '600', margin: 10 },
  price: { fontSize: 16, marginHorizontal: 10, marginBottom: 10 },
});
