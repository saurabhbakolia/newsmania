// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwhhztaOa5dOxw8uQLBNrMJ-LJi7F6lRA",
    authDomain: "newmania.firebaseapp.com",
    projectId: "newmania",
    storageBucket: "newmania.appspot.com",
    messagingSenderId: "456403160046",
    appId: "1:456403160046:web:40c8544ecc21a84d275cff",
    measurementId: "G-C7W3RJ9PYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);