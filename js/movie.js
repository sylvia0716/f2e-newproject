const movieCards = document.querySelectorAll('.movie-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 70); // ⭐ 一張一張出現（快）
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

movieCards.forEach(card => observer.observe(card));
