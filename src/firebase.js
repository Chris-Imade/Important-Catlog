import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxjDEKK786NPN4276I0H_Re43CBVh-L1Q",
    authDomain: "catlog-firestore.firebaseapp.com",
    projectId: "catlog-firestore",
    storageBucket: "catlog-firestore.appspot.com",
    messagingSenderId: "566941631339",
    appId: "1:566941631339:web:2be67b34a6e8279624c22e",
    measurementId: "G-5JKQYQE797"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const db = getFirestore(firebaseApp);