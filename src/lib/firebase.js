import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-f35e2.firebaseapp.com",
  projectId: "reactchatapp-f35e2",
  storageBucket: "reactchatapp-f35e2.appspot.com",
  messagingSenderId: "340855712474",
  appId: "1:340855712474:web:e9e48df3e0253d0bf1d3e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
