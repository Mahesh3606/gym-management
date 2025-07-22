// diet.js
import { db } from "./firebase.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function saveDietPlan() {
  const plan = document.getElementById("dietPlan").value;
  await setDoc(doc(db, "diet", "default"), { plan });
  alert("Diet plan saved successfully");
  loadDietPlan();
}

async function loadDietPlan() {
  const docRef = doc(db, "diet", "default");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    document.getElementById("savedDiet").textContent = docSnap.data().plan;
  }
}

window.onload = loadDietPlan;
window.saveDietPlan = saveDietPlan;