// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxzlrIxT-OKDdJtZl1ixUPr34N4ite8zA",
  authDomain: "add-to-cart-auth.firebaseapp.com",
  databaseURL: "https://add-to-cart-auth-default-rtdb.firebaseio.com",
  projectId: "add-to-cart-auth",
  storageBucket: "add-to-cart-auth.firebasestorage.app",
  messagingSenderId: "192831400600",
  appId: "1:192831400600:web:7103c86922c6e9f6857eed",
  measurementId: "G-GM1TL2SKHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
