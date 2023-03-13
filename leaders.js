// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

writeUserData("an", "awa", "myelamioafe@me.com", "imageurl");
