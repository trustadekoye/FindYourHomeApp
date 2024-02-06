// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCotF-7os0tKQaLOU-Rk6XA9sHrXvhxYkM",
  authDomain: "simple-login-page-fc5ee.firebaseapp.com",
  projectId: "simple-login-page-fc5ee",
  storageBucket: "simple-login-page-fc5ee.appspot.com",
  messagingSenderId: "638671359597",
  appId: "1:638671359597:web:36d1a9b6394934ab447964",
  measurementId: "G-FKFL40KZZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, createUserWithEmailAndPassword }