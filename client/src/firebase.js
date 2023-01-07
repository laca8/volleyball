// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDV_agPIHUCUcUe33CEgzjsKmO7DSnVZds",
  authDomain: "vollyball-cb3fb.firebaseapp.com",
  projectId: "vollyball-cb3fb",
  storageBucket: "vollyball-cb3fb.appspot.com",
  messagingSenderId: "756438638966",
  appId: "1:756438638966:web:e460181eca87e8b64b5a57",
  measurementId: "G-TNML6BYD4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
