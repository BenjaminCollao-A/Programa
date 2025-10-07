import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Importar todas las pantallas
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RoomsCatalogScreen from './screens/RoomsCatalogScreen';
import BookingSummaryScreen from './screens/BookingSummaryScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import DashboardScreen from './screens/DashboardScreen';
import UsersScreen from './screens/UsersScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// 🧭 Stack del Cliente (flujo de reserva)
function ClienteStack() {
  return (
    <Stack.Navigator
      initialRouteName="Buscar"
      screenOptions={{
        headerStyle: { backgroundColor: '#003366' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Buscar" component={SearchScreen} options={{ title: 'Buscar Disponibilidad' }} />
      <Stack.Screen name="Habitaciones" component={RoomsCatalogScreen} options={{ title: 'Catálogo de Habitaciones' }} />
      <Stack.Screen name="Resumen" component={BookingSummaryScreen} options={{ title: 'Resumen de Reserva' }} />
      <Stack.Screen name="Pago" component={PaymentScreen} options={{ title: 'Pago' }} />
      <Stack.Screen name="Confirmación" component={ConfirmationScreen} options={{ title: 'Confirmación de Reserva' }} />
    </Stack.Navigator>
  );
}

// 🧭 Navegación principal (Drawer)
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          drawerActiveTintColor: '#003366',
          headerStyle: { backgroundColor: '#003366' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Reservar" component={ClienteStack} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Usuarios" component={UsersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
