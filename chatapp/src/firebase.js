// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBvN61zPu9pnYWDqTgzRceBKPT0jrAank",
  authDomain: "chat-application-b4787.firebaseapp.com",
  projectId: "chat-application-b4787",
  storageBucket: "chat-application-b4787.appspot.com",
  messagingSenderId: "52160666179",
  appId: "1:52160666179:web:a0869ef12211f180d552f6",
  measurementId: "G-V9YLTLE9Q9"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app);
