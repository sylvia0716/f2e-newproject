// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyAet8tuAkqObxWaA0O-Vkr6dVeCjnhK51A",
  authDomain: "f2e-final-10ead.firebaseapp.com",
  projectId: "f2e-final-10ead",
  storageBucket: "f2e-final-10ead.appspot.com",
  messagingSenderId: "652616878374",
  appId: "1:652616878374:web:1c276d157d6d87ac6fd9e7"
};

// 初始化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 表單送出
const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // 阻止頁面刷新

  // 取得表單資料
  const orderData = {
    name: document.getElementById("buyerName").value,
    phone: document.getElementById("buyerPhone").value,
    email: document.getElementById("buyerEmail").value,
    date: document.getElementById("movieDate").value,
    tickets: document.getElementById("ticketCount").value,
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "orders"), orderData);
    alert("🎉 我們已經收到你的訂單了！請記得至一樓櫃檯劃位。");
    form.reset(); // 清空表單
  } catch (error) {
    console.error("寫入失敗：", error);
    alert("❌ 訂單送出失敗，請稍後再試");
  }
});
