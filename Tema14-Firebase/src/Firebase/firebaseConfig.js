// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWkj0mw4HjrF_whkRy48SdWANIN6h_fk4",
  authDomain: "botanicalproject-a66c4.firebaseapp.com",
  projectId: "botanicalproject-a66c4",
  storageBucket: "botanicalproject-a66c4.appspot.com",
  messagingSenderId: "307862069165",
  appId: "1:307862069165:web:7f31fdbb2510a66c794b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);