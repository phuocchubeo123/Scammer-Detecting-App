import * as React from 'react';
import { View, Text, StyleSheet, Header, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MainScreen from '../screens/MainScreen';
import PhoneScreen from '../screens/PhoneScreen';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainScreen'
        component={MainScreen}
        options={{
          title: 'Check scam message',
          headerStyle: {
            backgroundColor: '#34568B',
            height: 120,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='PhoneScreen'
        component={PhoneScreen}
        options={{
          title: 'Check scam phone number',
          headerStyle: {
            backgroundColor: '#34568B',
            height: 120,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Check scam message' component={Home} />
        <Drawer.Screen name='Check scam phone number' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
