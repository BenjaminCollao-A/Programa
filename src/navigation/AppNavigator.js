// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UsersScreen from '../screens/UsersScreen';
import colors from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function AdminStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.secondary,
      headerTitleStyle: { fontWeight: '600' }
    }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerLabelStyle: { fontWeight: '600' }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Cliente',
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={AdminStack}
        options={{
          title: 'Dashboard',
          drawerIcon: ({ color, size }) => <Ionicons name="stats-chart-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="Usuarios"
        component={UsersScreen}
        options={{
          title: 'Usuarios',
          drawerIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}
