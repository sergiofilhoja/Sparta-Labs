import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import City from '../screens/City';
import SinglePage from '../screens/SinglePage';


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="City" component={City} />
    <Stack.Screen name="SinglePage" component={SinglePage} />
  </Stack.Navigator>
);