import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCotF-7os0tKQaLOU-Rk6XA9sHrXvhxYkM",
  authDomain: "simple-login-page-fc5ee.firebaseapp.com",
  projectId: "simple-login-page-fc5ee",
  storageBucket: "simple-login-page-fc5ee.appspot.com",
  messagingSenderId: "638671359597",
  appId: "1:638671359597:web:36d1a9b6394934ab447964",
  measurementId: "G-FKFL40KZZF"
};

const firebaseApp = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
