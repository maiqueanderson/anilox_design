import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "COLOQUE_AQUI_API_KEY",
  authDomain: "COLOQUE_AQUI_AUT_DOMAIN",
  projectId: "COLOQUE_AQUI_PROJECT_ID",
  storageBucket: "COLOQUE_AQUI_STORAGE_BUCKET",
  messagingSenderId: "COLOQUE_AQUI_SENDER_ID",
  appId: "COLOQUE_AQUI_APP_ID"
  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 