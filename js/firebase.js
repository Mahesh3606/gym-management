import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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
export const db = getFirestore(app);
export const auth = getAuth(app);

// // Update Firebase Database to Include Role
// import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// setDoc(doc(db, "users", user.uid), {
//   email: user.email,
//   role: "member" // or "admin"
// });



