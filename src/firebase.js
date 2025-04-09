// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Required for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlZ8aDFvARzYfBhtlPfnecQuHz5bi4XA",
  authDomain: "ecommerce-45092.firebaseapp.com",
  projectId: "ecommerce-45092",
  storageBucket: "ecommerce-45092.firebasestorage.app",
  messagingSenderId: "237706492358",
  appId: "1:237706492358:web:6f5ec3a6b0daba68949ac7",
  measurementId: "G-JF2LMVNHL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

// Auth instance
const auth = getAuth(app);

// Export both
export { db, auth };
