// Import the functions you need from the SDKs you need
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
const app = initializeApp(firebaseConfig);


export const getFirestoreApp = ()=>{
    return app
}