import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC6HGRnpRlkLJNiSAnBpLyc2aQZfQK7Si8',
  authDomain: 'book-distributing-system.firebaseapp.com',
  databaseURL: 'https://book-distributing-system.firebaseio.com',
  projectId: 'book-distributing-system',
  storageBucket: 'book-distributing-system.appspot.com',
  messagingSenderId: '191333540422',
  appId: '1:191333540422:web:4b513e1442043ffc14a047',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
