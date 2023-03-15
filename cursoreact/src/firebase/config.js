// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmdom36hTaPNvdCwpLdYi2CApWvtChjbg",
  authDomain: "cursoreact-e9f4a.firebaseapp.com",
  projectId: "cursoreact-e9f4a",
  storageBucket: "cursoreact-e9f4a.appspot.com",
  messagingSenderId: "347469317455",
  appId: "1:347469317455:web:eba54742f1f6229431713a",
  measurementId: "G-ZB7BS46EVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirebase = () => app