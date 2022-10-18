// Firebase Collection
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3hmzTeIJJn10zX1NOaHkbbuL3QTQwKQY",
  authDomain: "booter-48243.firebaseapp.com",
  projectId: "booter-48243",
  storageBucket: "booter-48243.appspot.com",
  messagingSenderId: "119279767120",
  appId: "1:119279767120:web:388364b35d152e6b6f4b55",
  measurementId: "G-LKL8Z2CXTJ"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);
// E-mail Subscribes
// var subscription = firebase.database().ref('subscription_test');

async function subscriptionEmail (evt) {
  var email = document.getElementById('email');
  
  db.collection("cities").doc("new-city-id").set(email.text);
  
  console.log("Document written with ID: ", docRef.id);
}