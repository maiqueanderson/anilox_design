import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdDyw6_ORaGloKMWfQruT7NU8BmnzgCUY",
  authDomain: "aniloxdesign3.firebaseapp.com",
  projectId: "aniloxdesign3",
  storageBucket: "aniloxdesign3.appspot.com",
  messagingSenderId: "549455333949",
  appId: "1:549455333949:web:a726136fd60cd769ab3854"
  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 