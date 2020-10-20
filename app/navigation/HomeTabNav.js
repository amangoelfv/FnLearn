import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/Home';
import Results from '../screens/Results';
import LoginScreen2 from '../screens/Search';


const Stack = createStackNavigator();


export default function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen2} options={{ title: 'Login' }} />
      <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }}  />
      <Stack.Screen name="Results" component={Results} options={{ title: 'Search' }} />
    </Stack.Navigator>
  );
}