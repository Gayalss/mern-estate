// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a235.firebaseapp.com",
  projectId: "mern-estate-7a235",
  storageBucket: "mern-estate-7a235.appspot.com",
  messagingSenderId: "1060030233373",
  appId: "1:1060030233373:web:2de02d296798b15135fff4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
