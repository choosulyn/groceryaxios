import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAHdOphsBlTBgASyQUkShjyfOpumJAmfQU",
  authDomain: "bt3103-grocery-c92c1.firebaseapp.com",
  databaseURL: "https://bt3103-grocery-c92c1.firebaseio.com",
  projectId: "bt3103-grocery-c92c1",
  storageBucket: "bt3103-grocery-c92c1.appspot.com",
  messagingSenderId: "764869484450",
  appId: "1:764869484450:web:be6c181e18c23c6fe35cfb",
  measurementId: "G-D5GHVKMSBW"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;