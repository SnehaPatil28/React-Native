import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  CartProvider,
} from './Component/Exp7/CartContext';

import ProductListScreen from './Component/Exp7/ProductListScreen';
import CartScreen from './Component/Exp7/CartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Products"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2196F3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Products"
            component={ProductListScreen}
            options={{
              title: 'Products',
            }}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: 'Shopping Cart',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;