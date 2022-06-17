import { initializeApp } from 'firebase/app';
import {getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNj2rnHqtYwFlxr47s3nHmF0DvLDKzyFo",
  authDomain: "thedawn-bd825.firebaseapp.com",
  projectId: "thedawn-bd825",
  storageBucket: "thedawn-bd825.appspot.com",
  messagingSenderId: "454757433681",
  appId: "1:454757433681:web:6dd209d5dd706ce40c9370"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);