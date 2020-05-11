import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from './screens/Login';
import {BookList} from './screens/BookList';

const Stack = createStackNavigator();

export const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BookList" component={BookList} />
    </Stack.Navigator>
  </NavigationContainer>
);
