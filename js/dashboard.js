// dashboard.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("addMemberForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("memberName").value;
  const email = document.getElementById("memberEmail").value;

  try {
    await addDoc(collection(db, "members"), { name, email });
    alert("Member added successfully");
    loadMembers();


    //  Redirect to home/member page
    window.location.href = "member.html"; // or "index.html" or your desired home page


    
  } catch (err) {
    console.error("Error adding member:", err);
  }
});

async function loadMembers() {
  const list = document.getElementById("memberList");
  const querySnapshot = await getDocs(collection(db, "members"));
  list.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().name} - ${doc.data().email}`;
    list.appendChild(li);
  });
}

window.onload = loadMembers;