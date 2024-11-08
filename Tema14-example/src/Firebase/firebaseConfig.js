import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWkj0mw4HjrF_whkRy48SdWANIN6h_fk4",
  authDomain: "botanicalproject-a66c4.firebaseapp.com",
  projectId: "botanicalproject-a66c4",
  storageBucket: "botanicalproject-a66c4.appspot.com",
  messagingSenderId: "307862069165",
  appId: "1:307862069165:web:7f31fdbb2510a66c794b24"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);