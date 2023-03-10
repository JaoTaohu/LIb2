// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
