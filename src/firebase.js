import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-z-Acz_rDO6DYJ0aMPrZRATF3vsi_EdA",
    authDomain: "clone-ad8e1.firebaseapp.com",
    databaseURL: "https://clone-ad8e1-default-rtdb.firebaseio.com",
    projectId: "clone-ad8e1",
    storageBucket: "clone-ad8e1.appspot.com",
    messagingSenderId: "465755341442",
    appId: "1:465755341442:web:d9e5dd771fd9951e65ea9b",
    measurementId: "G-H1GCFT3X1R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };