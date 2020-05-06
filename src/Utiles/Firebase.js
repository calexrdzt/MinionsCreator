import * as firebase from 'firebase/app';
import 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyCDH35aexQ53N4MCbz1ywHKX8Z2lPOt8rs",
  authDomain: "minioncreator-b006f.firebaseapp.com",
  databaseURL: "https://minioncreator-b006f.firebaseio.com",
  projectId: "minioncreator-b006f",
  storageBucket: "minioncreator-b006f.appspot.com",
  messagingSenderId: "501682831476",
  appId: "1:501682831476:web:68157d674d3f9d1b8c9121"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

console.log('Iniciando Minions DataBase');

const db = firebase.firestore();

export const minionsCol = db.collection('minionCol');
export const usersCol = db.collection('users');

export default db;


