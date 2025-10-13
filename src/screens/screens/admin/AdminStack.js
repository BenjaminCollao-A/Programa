import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminDashboardScreen from './AdminDashboardScreen';
import ManageUsersScreen from './ManageUsersScreen';
import ManageRoomsScreen from './ManageRoomsScreen';
import ManageBookingsScreen from './ManageBookingsScreen';
import ReportsScreen from './ReportsScreen';

const Stack = createStackNavigator();

export default function AdminStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: { backgroundColor: '#003366' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Dashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="Usuarios" component={ManageUsersScreen} />
      <Stack.Screen name="Habitaciones" component={ManageRoomsScreen} />
      <Stack.Screen name="Reservas" component={ManageBookingsScreen} />
      <Stack.Screen name="Reportes" component={ReportsScreen} />
    </Stack.Navigator>
  );
}
