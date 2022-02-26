import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      <Stack.Screen
        name='Home'
        component={MainScreen}
        options={{
          headerShown: true,
        }}
      />
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
