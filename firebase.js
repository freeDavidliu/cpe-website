
// Firebase config and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3vByCSTjwk_3yrC02swGeyGT5g7vhe7Y",
  authDomain: "cpe-website-ce225.firebaseapp.com",
  projectId: "cpe-website-ce225",
  storageBucket: "cpe-website-ce225.firebasestorage.app",
  messagingSenderId: "294157637203",
  appId: "1:294157637203:web:5d580e05c50ec8b22398a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, signInWithEmailAndPassword, collection, getDocs, addDoc };
