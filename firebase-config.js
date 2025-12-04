// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCMDdNr6wB6gZe00olBid3oi-c9FuLR27c",
  authDomain: "loguin-f1921.firebaseapp.com",
  projectId: "loguin-f1921",
  storageBucket: "loguin-f1921.firebasestorage.app",
  messagingSenderId: "726207211540",
  appId: "1:726207211540:web:395370c11e864151301f01",
  measurementId: "G-D4HF5PVS64"
};

// 1. Inicializa Firebase (usando la función global del SDK v8)
firebase.initializeApp(firebaseConfig);

// 2. Define las referencias globales a los servicios
const auth = firebase.auth();
const db = firebase.firestore(); 
