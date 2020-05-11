import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/Router';

const App = () => (
  <SafeAreaProvider>
    <StatusBar />
    <Router />
  </SafeAreaProvider>
);

export default App;
