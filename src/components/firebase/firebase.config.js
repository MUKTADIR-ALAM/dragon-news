// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ZXuYlTdCm56ixT_TJ_fSGZzyPotkbXg",
  authDomain: "private-route-c78db.firebaseapp.com",
  projectId: "private-route-c78db",
  storageBucket: "private-route-c78db.firebasestorage.app",
  messagingSenderId: "781869404743",
  appId: "1:781869404743:web:21bf93712c460dd8205762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);