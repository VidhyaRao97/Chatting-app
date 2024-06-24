import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ishara-ba0e5.firebaseapp.com",
  projectId: "ishara-ba0e5",
  storageBucket: "ishara-ba0e5.appspot.com",
  messagingSenderId: "751429883817",
  appId: "1:751429883817:web:ddacc30ccab16cb28316b8",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
