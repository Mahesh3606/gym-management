
// billing.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("billingForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("billingName").value;
  const amount = document.getElementById("billingAmount").value;

  try {
    await addDoc(collection(db, "bills"), {
      name,
      amount,
      date: new Date().toISOString()
    });
    alert("Bill generated successfully");
    loadBills();
  } catch (err) {
    console.error("Error creating bill:", err);
  }
});

async function loadBills() {
  const list = document.getElementById("billingList");
  const querySnapshot = await getDocs(collection(db, "bills"));
  list.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.name} - ₹${data.amount} on ${new Date(data.date).toLocaleDateString()}`;
    list.appendChild(li);
  });
}

window.onload = loadBills;