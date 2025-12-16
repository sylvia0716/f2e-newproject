document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');

    // 如果找不到卡片，直接結束（防呆）
    if (!cards.length) return;

    // 準備 IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = [...cards].indexOf(entry.target);

                    // 延遲出現（每張差 70ms）
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 100);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
});
