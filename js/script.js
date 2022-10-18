// Firebase Collection
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

firebase.initializeApp(config);

var subscription = firebase.database().ref('subscription_test');

function subscriptionEmail (evt) {
  var email = document.getElementById('email');
  
  // TODO 驗證格式
  
  subscription.push().update({ 
    email: email.value,
    createdAt: Date.now()
  });
  console.log('done', Date.now(), email.value);
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ㅇㅇ
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach(tab => {
        tab.children[0].classList.remove(
            'border-btBk', 
            'border-b-2'
        )
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate a new tab and panel based on th target
    e.target.classList.add('border-btBk', 'border-b-2')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}