import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function loadMemberBills() {
  const list = document.getElementById("memberBills");
  const snapshot = await getDocs(collection(db, "bills"));
  snapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().name}: ₹${doc.data().amount}`;
    list.appendChild(li);
  });
}

async function loadMemberNotifications() {
  const list = document.getElementById("memberNotifications");
  const snapshot = await getDocs(collection(db, "notifications"));
  snapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().title}: ${doc.data().message}`;
    list.appendChild(li);
  });
}

window.onload = () => {
  loadMemberBills();
  loadMemberNotifications();
};
