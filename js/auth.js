// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDUAdvgGt69luMVTD5Xs2KVr054xQ8WgiE",
  authDomain: "gym-management-83a22.firebaseapp.com",
  projectId: "gym-management-83a22",
  storageBucket: "gym-management-83a22.firebasestorage.app",
  messagingSenderId: "470767351292",
  appId: "1:470767351292:web:b8810bafe8715de146ee79",
  measurementId: "G-GW9PLGEF9R"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login handler
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
