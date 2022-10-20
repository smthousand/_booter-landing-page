import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

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
const alert = document.querySelector('.alert')

submitButton.onclick = async () => {
  
  if (submitInput.value === '') {
    alert.innerHTML('공백은 유효하지 않습니다')
  } else {
    await subscriptionEmail(submitInput.value);
    alert.innerHTML('')
  }
}
async function subscriptionEmail (email) {
  email.preventdefault()
  const citiesCol = await addDoc(collection(db, "email"), {email:email});
  console.log(db)
}

submitForm.addEventListener('submit', subscriptionEmail());