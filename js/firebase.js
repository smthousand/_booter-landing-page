import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3hmzTeIJJn10zX1NOaHkbbuL3QTQwKQY",
  authDomain: "booter-48243.firebaseapp.com",
  projectId: "booter-48243",
  storageBucket: "booter-48243.appspot.com",
  messagingSenderId: "119279767120",
  appId: "1:119279767120:web:388364b35d152e6b6f4b55",
  measurementId: "G-LKL8Z2CXTJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const submitForm = document.querySelector('#submit-form')
const submitInput = document.querySelector('#submit-form input');
const submitButton = document.querySelector('#submit-form button');

submitButton.onclick = async () => {
  await subscriptionEmail(submitInput.value);
}
async function subscriptionEmail (email) {
  // const collec = await db.collection("email");
  const citiesCol = await addDoc(collection(db, "email"), {email:email});
  // const citySnapshot = await getDocs("BJSPL4X2X5GcEdXrOYPY");
  // const cityList = await citySnapshot.docs.map(doc => doc.data());
  // console.log(cityList)
  console.log(db)
}