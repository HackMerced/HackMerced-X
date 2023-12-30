// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjkRFVZ-XiaOsncu49_hkQ68ld1ZOw_Ls",
  authDomain: "hackmerced-ix.firebaseapp.com",
  projectId: "hackmerced-ix",
  storageBucket: "hackmerced-ix.appspot.com",
  messagingSenderId: "430233538654",
  appId: "1:430233538654:web:319cdef9e7d55f5b9ca4cf",
  measurementId: "G-MY9KJLM7G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);≈

export default db;

