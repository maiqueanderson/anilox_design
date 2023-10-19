import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhS6ICSDcC1x4kZVnNkF-pFJ09D2X5xf0",
    authDomain: "aniloxdesign-be679.firebaseapp.com",
    projectId: "aniloxdesign-be679",
    storageBucket: "aniloxdesign-be679.appspot.com",
    messagingSenderId: "498824151633",
    appId: "1:498824151633:web:e2f46797a42a192023ee70"
  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 