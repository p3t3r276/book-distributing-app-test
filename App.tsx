import React from 'react';
import firebase from 'firebase/app';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {Router} from './src/Router';
import {store} from './src/stores/configStore';
import firebaseConfig from './firebase';

const FireBaseReduxProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...FireBaseReduxProps}>
      <SafeAreaProvider>
        <StatusBar />
        <Router />
      </SafeAreaProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
