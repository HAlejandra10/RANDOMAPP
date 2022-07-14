// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5742kJWo8C-4_8EbaZ7N1t3iGMni8bbI",
  authDomain: "ransiteapp.firebaseapp.com",
  projectId: "ransiteapp",
  storageBucket: "ransiteapp.appspot.com",
  messagingSenderId: "869068337851",
  appId: "1:869068337851:web:350cdbfbc8823aacf16f9e",
  measurementId: "G-9P44KMSQVQ"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig); 
const analytics = getAnalytics(db);


export default db;