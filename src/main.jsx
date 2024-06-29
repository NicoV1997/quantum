import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Requerido para que Bootstrap funcione en mi proyecto
import './index.css'

// FIREBASE
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnE4FWTgifgsvUuA49Is4F6CGeuXRemmc",
  authDomain: "quantum-f3205.firebaseapp.com",
  projectId: "quantum-f3205",
  storageBucket: "quantum-f3205.appspot.com",
  messagingSenderId: "7557639233",
  appId: "1:7557639233:web:ba4dd5a48467dbd7512ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
