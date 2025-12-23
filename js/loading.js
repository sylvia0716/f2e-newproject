window.addEventListener("load", function () {
    const loadingElement = document.getElementById("loading");
    if (!loadingElement) return; // 安全檢查

    setTimeout(function() {
        // 1. 讓 Loading 淡出
        loadingElement.style.opacity = "0";
        
        setTimeout(function() {
            // 2. 徹底移除 Loading 並啟動動畫
            loadingElement.style.display = "none";
            document.body.classList.add("page-loaded");
        }, 500); 
    }, 1000); 
});