const cards = document.querySelectorAll('.product-card');
console.log('cards length:', cards.length);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.2
    }
);

cards.forEach(card => observer.observe(card));
