import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCewa3XXnGeU7FLPEA9UmohlTe9XJTbkBE",
    authDomain: "bhat-kitchen.firebaseapp.com",
    projectId: "bhat-kitchen",
    storageBucket: "bhat-kitchen.appspot.com",
    messagingSenderId: "1094797464764",
    appId: "1:1094797464764:web:292e4fff6d3605639aacb9",
    measurementId: "G-DGSFY49M4Z"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;

export const firestore = firebase.firestore();

export const storage = firebase.storage();