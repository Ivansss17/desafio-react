import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestoreApp } from './firebase/dbConfig';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBCPPibjIhhWOxSxzuZw5ty8ulKvqxJxHM",
  authDomain: "proyectoreact-c778b.firebaseapp.com",
  projectId: "proyectoreact-c778b",
  storageBucket: "proyectoreact-c778b.appspot.com",
  messagingSenderId: "29430500435",
  appId: "1:29430500435:web:3ab158f72351c980020aa6"
};

// Initialize Firebase
initializeApp(firebaseConfig);



 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
