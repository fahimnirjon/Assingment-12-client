// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBlnyqkAeBHECWy3TC11czf1S9xzoplA78",
  authDomain: "horizon-hunt.firebaseapp.com",
  projectId: "horizon-hunt",
  storageBucket: "horizon-hunt.appspot.com",
  messagingSenderId: "274054659683",
  appId: "1:274054659683:web:be09020dc0c022638a8256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
