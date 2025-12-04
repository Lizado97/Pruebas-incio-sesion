// firebase-config.js

// NOTA IMPORTANTE: Los SDKs (firebase-app.js, firebase-auth.js, etc.)
// deben ser cargados en el HTML ANTES de este archivo.

const firebaseConfig = {
  // Asegúrate que esta API Key sea correcta y activa:
  apiKey: "AIzaSyCMDdNr6wB6gZe00olBid3oi-c9FuLR27c",
  authDomain: "loguin-f1921.firebaseapp.com",
  projectId: "loguin-f1921",
  storageBucket: "loguin-f1921.firebasestorage.app",
  messagingSenderId: "726207211540",
  appId: "1:726207211540:web:395370c11e864151301f01",
  measurementId: "G-D4HF5PVS64"
};

// Inicializa Firebase usando la función global (SDK v8)
firebase.initializeApp(firebaseConfig);

// Define las referencias globales a los servicios
const auth = firebase.auth();
const db = firebase.firestore(); 

// NOTA: La funcionalidad de getAnalytics ha sido eliminada
// para simplificar y resolver el conflicto de sintaxis.
