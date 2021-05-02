import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCB5cKQ1YkIKVtHjLFRMwbcYVB2iVjaoIE",
  authDomain: "dataroid-1770d.firebaseapp.com",
  projectId: "dataroid-1770d",
  storageBucket: "dataroid-1770d.appspot.com",
  messagingSenderId: "88323117052",
  appId: "1:88323117052:web:d1da2c0dc5be4beb83ac79"
})

var db = firebaseApp.firestore();

export {db};