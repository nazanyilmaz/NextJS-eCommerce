// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy8q9P4Qsc_uRZVjcnvj8HZ0exFd9cvrw",
  authDomain: "shopdb-668b5.firebaseapp.com",
  projectId: "shopdb-668b5",
  storageBucket: "shopdb-668b5.firebasestorage.app",
  messagingSenderId: "434098768206",
  appId: "1:434098768206:web:05c5538411c8f1c46ab61f",
  measurementId: "G-BPZJ7TT5NT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
