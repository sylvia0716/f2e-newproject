document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    if (!cards.length) return;

    // --- 1. 原有的 IntersectionObserver 邏輯 ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const allCards = Array.from(document.querySelectorAll('.product-card'));
                    const index = allCards.indexOf(entry.target);

                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 100);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 } // 稍微調低一點讓手機載入更靈敏
    );

    cards.forEach(card => observer.observe(card));

    // --- 2. 新增：更多商品按鈕點擊邏輯 ---
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // 抓取當前所有隱藏的商品
            const hiddenCards = document.querySelectorAll('.product-card.product-hidden');

            hiddenCards.forEach(card => {
                // 先將 display 改為 flex (或者是原本卡片的佈局方式)
                card.style.display = 'flex';

                // 稍微延遲一點點移除類別，讓 IntersectionObserver 偵測到並跑動畫
                setTimeout(() => {
                    card.classList.remove('product-hidden');
                }, 10);
            });

            // 按鈕點擊後消失
            loadMoreContainer.style.display = 'none';
        });
    }
});

function toggleFlip(element) {
    element.classList.toggle('flipped');
}