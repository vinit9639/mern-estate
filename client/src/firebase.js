// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1b89c.firebaseapp.com",
  projectId: "mern-estate-1b89c",
  storageBucket: "mern-estate-1b89c.appspot.com",
  messagingSenderId: "812475058769",
  appId: "1:812475058769:web:1a2ef4cc6462e6a6bbc670"
};



// Initialize Firebase
 export const app = initializeApp(firebaseConfig);