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

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={MainScreen} options={{}} />
    </Stack.Navigator>
  );
}

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
