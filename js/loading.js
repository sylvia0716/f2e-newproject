// js/loading.js

window.addEventListener("load", function () {
    const loadingElement = document.getElementById("loading");
    
    // 這裡可以設定一個「最少顯示時間」，以免網頁跑太快 Loading 一閃而過
    // 假設至少顯示 1.5 秒 (1500ms)
    setTimeout(function() {
        
        // 1. 讓 Loading 淡出
        loadingElement.style.opacity = "0";
        
        // 2. 等淡出動畫 (0.5s) 結束後，把 loading 關掉並啟動網頁動畫
        setTimeout(function() {
            loadingElement.style.display = "none";
            
            // 【關鍵】給 body 加上 "page-loaded" class
            // 這時候 CSS 才會抓到這個 class 開始跑動畫
            document.body.classList.add("page-loaded");
            
        }, 500); // 這個 500 要對應你 CSS #loading 的 transition 時間
        
    }, 1500);
});