import React from 'react';
import {StatusBar} from 'react-native';

import {Router} from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar />
      <Router />
    </>
  );
};

export default App;
