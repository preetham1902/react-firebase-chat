import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-64cda.firebaseapp.com",
    projectId: "reactchat-64cda",
    storageBucket: "reactchat-64cda.appspot.com",
    messagingSenderId: "298019420967",
    appId: "1:298019420967:web:fdc20539c8a05e1d37c702"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFireStore();
export const storage = getStorage();