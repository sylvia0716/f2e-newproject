document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(
    ".aboutus_text"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // 已淡入的就不再監看，避免重複觸發
        }
      });
    },
    {
      root: null, // 預設是 viewport
      rootMargin: "0px 0px -20% 0px", // 提前一點觸發，但不要太早
      threshold: 0.4, // 元素出現 40% 才觸發淡入
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
});
