// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFR4mDCS5-UnDAAErvYuqask6OLsY0evc",
  authDomain: "personallib-fcd9e.firebaseapp.com",
  projectId: "personallib-fcd9e",
  storageBucket: "personallib-fcd9e.appspot.com",
  messagingSenderId: "833254903388",
  appId: "1:833254903388:web:df5edd2207595a821b2099",
  measurementId: "G-5TKQJDHTCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);