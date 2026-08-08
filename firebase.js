import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyA53_WqvIuoF2oAB1XOMIniLrRq7-xoAu4",
  authDomain: "noor-store-5a1af.firebaseapp.com",
  projectId: "noor-store-5a1af",
  storageBucket: "noor-store-5a1af.firebasestorage.app",
  messagingSenderId: "7922584477",
  appId: "1:7922584477:web:b813630c4735e33fa6fd74"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
