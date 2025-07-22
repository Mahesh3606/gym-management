// notifications.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("notificationForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("notifTitle").value;
  const message = document.getElementById("notifMessage").value;

  await addDoc(collection(db, "notifications"), {
    title,
    message,
    date: new Date().toISOString()
  });

  alert("Notification sent successfully");
  loadNotifications();
});

async function loadNotifications() {
  const list = document.getElementById("notificationList");
  const querySnapshot = await getDocs(collection(db, "notifications"));
  list.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.title}: ${data.message}`;
    list.appendChild(li);
  });
}

window.onload = loadNotifications;