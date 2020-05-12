import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {firebaseReducer} from 'react-redux-firebase';

import {AppActionTypes} from '../types/actions';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionTypes>),
);
