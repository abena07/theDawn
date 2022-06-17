import { initializeApp } from 'firebase/app';
import {getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcg-Sm0OZUSqrqkuAbtizRSZwvBcII2kw",
    authDomain: "thedawn-9743b.firebaseapp.com",
    projectId: "thedawn-9743b",
    storageBucket: "thedawn-9743b.appspot.com",
    messagingSenderId: "528034181435",
    appId: "1:528034181435:web:79c78ebf2c50cabbc8071e",
    measurementId: "G-XKV6B6FHZ4"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);