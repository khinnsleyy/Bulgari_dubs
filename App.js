import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import Login from './screen/Login';
import Cavemanshop from './screen/Cavemanshop';
import ShoppngCart from './screen/ShoppingCart';
import Rolexshop from './screen/Rolexshop';
import Casioshop from './screen/Casio';
import Bulgarishop from './screen/Bulgarishop';
import Maseratishop from './screen/Maseratishop';
import CheckOut from './screen/CheckOut';
//import Cart from './screen/Cart';

const Stack = createStackNavigator();


export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ShoppingCart" component={ShoppngCart} />
        <Stack.Screen name="Maserati" component={Maseratishop} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Caveman" component={Cavemanshop} />
        <Stack.Screen name="Casio" component={Casioshop} />
        <Stack.Screen name="Rolex" component={Rolexshop } />
        <Stack.Screen name="Bulgari" component={Bulgarishop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}