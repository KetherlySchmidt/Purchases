import firebase from "firebase";
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyABTt_F1aJrYYxIctl1W4ANLOL-2Uh7nA0",
    authDomain: "compras-726a5.firebaseapp.com",
    projectId: "compras-726a5",
    storageBucket: "compras-726a5.appspot.com",
    messagingSenderId: "382014499552",
    appId: "1:382014499552:web:b2f0fa786a64fe98bf7e85"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = firebaseApp.firestore()
export default db;