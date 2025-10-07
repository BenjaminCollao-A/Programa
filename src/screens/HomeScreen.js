// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';
import colors from '../styles/colors';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRoomData(rooms);
      setLoading(false);
    }, 1200); // Simula llamada a BD
  }, []);

  return (
    <ScrollView style={{ backgroundColor: colors.secondary }}>
      <Header />
      <SearchBar onSearch={() => {}} />
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 20 }} />
      ) : (
        roomData.map((room) => <RoomCard key={room.id} room={room} />)
      )}
    </ScrollView>
  );
}
