import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCNcfrz_776xjtvlL50csO6aEOV62u1AE0",
    authDomain: "web-4-0.firebaseapp.com",
    projectId: "web-4-0",
    storageBucket: "web-4-0.appspot.com",
    messagingSenderId: "1080702978770",
    appId: "1:1080702978770:web:953fdcc014b6d043adbb0b"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);