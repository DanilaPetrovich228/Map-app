// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRdCVSG_-F28h-j7y9WAAxxidPADFle1k",
  authDomain: "map-app-27297.firebaseapp.com",
  projectId: "map-app-27297",
  storageBucket: "map-app-27297.appspot.com",
  messagingSenderId: "276950921824",
  appId: "1:276950921824:web:74c1129062be1e5e27c905",
  measurementId: "G-9TJ6Q5VPT1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
