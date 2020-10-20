import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './navigation/HomeTabNav';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

};


export default App;
