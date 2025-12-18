document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.js-animate');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('進入畫面：', entry.target);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  animatedItems.forEach(item => observer.observe(item));
});