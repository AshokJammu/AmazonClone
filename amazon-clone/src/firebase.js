import firebase from 'firebase'
 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmyH4XsgWcEr4R4SK0qguo7acgrWfjWUg",
    authDomain: "clone-37dfa.firebaseapp.com",
    databaseURL: "https://clone-37dfa.firebaseio.com",
    projectId: "clone-37dfa",
    storageBucket: "clone-37dfa.appspot.com",
    messagingSenderId: "933037657347",
    appId: "1:933037657347:web:34f6753e9c4de87ea9ed36",
    measurementId: "G-3LDZNMDYKN"
}) 

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db,auth}
