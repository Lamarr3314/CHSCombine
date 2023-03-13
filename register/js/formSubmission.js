import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Paste the code from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9UsGQb9CZrAf9L95tu_N5u0nqd0OJN2E",
  authDomain: "chscombine-246b6.firebaseapp.com",
  databaseURL: "https://chscombine-246b6-default-rtdb.firebaseio.com",
  projectId: "chscombine-246b6",
  storageBucket: "chscombine-246b6.appspot.com",
  messagingSenderId: "1052550959110",
  appId: "1:1052550959110:web:965fade2cc8ec35bbff387",
  measurementId: "G-2GHJ0PS9ZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

document.getElementById("frmContact").addEventListener("submit", function (e) {
  e.preventDefault();
  set(ref(db, "interested/" + Math.random().toString(36).slice(2, 7)), {
    name: document.getElementById("name_bar").value,
    grade: document.getElementById("grade_bar").value,
    participation: document.getElementById("participation_bar").value,
  });

  alert("Your form is submitted");
  document.getElementById("frmContact").reset();
});
