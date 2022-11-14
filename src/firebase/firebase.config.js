// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVkYJd4daYAfHh5ugMoXGP7VbYHAnvFQU",
  authDomain: "doctors-portal-189e5.firebaseapp.com",
  projectId: "doctors-portal-189e5",
  storageBucket: "doctors-portal-189e5.appspot.com",
  messagingSenderId: "698879788663",
  appId: "1:698879788663:web:47ac8e969c3c5ac45f6872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;