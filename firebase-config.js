// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMDdNr6wB6gZe00olBid3oi-c9FuLR27c",
  authDomain: "loguin-f1921.firebaseapp.com",
  projectId: "loguin-f1921",
  storageBucket: "loguin-f1921.firebasestorage.app",
  messagingSenderId: "726207211540",
  appId: "1:726207211540:web:395370c11e864151301f01",
  measurementId: "G-D4HF5PVS64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore(); // Incluido por si quieres usar Firestore para los presupuestos
