// 取得按鈕元素
const backToTopBtn = document.getElementById('backToTopBtn');

// 設定按鈕顯示的滾動距離 (例如：滾動超過 300px 時顯示)
const scrollThreshold = 300; 

// 函式：偵測滾動，決定按鈕是否顯示
function toggleBackToTopButton() {
    if (window.scrollY > scrollThreshold) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// 函式：點擊按鈕後平滑滾動到頂部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 使用平滑滾動效果
    });
}

// 綁定事件監聽器
window.addEventListener('scroll', toggleBackToTopButton);
backToTopBtn.addEventListener('click', scrollToTop);
