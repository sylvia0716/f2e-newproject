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

// 1. 準備電影詳細資料資料庫
const movieData = {
  "1": {
    title: "美少女戰士",
    img: "./img/M/美少女戰士.png",
    date: "1992-03-07 (日本首播)",
    duration: "24分鐘/集",
    genre: "動畫、奇幻、冒險", // 新增
    version: "日語原音、國語配音", // 新增
    rating: "普遍級",
    director: "佐藤順一",
    cast: "三石琴乃、久川綾、富澤美智惠"
  },
  "2": {
    title: "藍色小精靈",
    img: "./img/M/藍色小精靈.png",
    date: "1981-09-12",
    duration: "100分鐘 (劇場版)",
    genre: "卡通、喜劇",
    version: "英語原音、國語配音",
    rating: "普遍級",
    director: "Peyo",
    cast: "藍色小精靈全體"
  },
  "3": {
    title: "小紅豆",
    img: "./img/M/小紅豆.png",
    date: "1995-04-04 (日本首播)",
    duration: "25分鐘/集",
    genre: "少女、校園、戀愛",
    version: "日語原音、國語配音",
    rating: "普遍級",
    director: "小島正幸",
    cast: "野山梓、勇之助、西野薰"
  },
  "4": {
    title: "北海小英雄",
    img: "./img/M/北海小英雄.png",
    date: "1974-04-03 (日本首播)",
    duration: "25分鐘/集",
    genre: "冒險、勵志、喜劇",
    version: "日語原音、國語配音",
    rating: "普遍級",
    director: "齊藤博",
    cast: "小威、黑龍船長"
  },
  "5": {
    title: "頑皮豹",
    img: "./img/M/頑皮豹.png",
    date: "1964-12-18 (首播)",
    duration: "6-10分鐘/集",
    genre: "幽默、喜劇、無厘頭",
    version: "無對白 (純配樂)、英語原音",
    rating: "普遍級",
    director: "Friz Freleng",
    cast: "頑皮豹、大鼻子先生"
  },
  "6": {
    title: "原子小金剛",
    img: "./img/M/原子小金剛.png",
    date: "1963-01-01 (首播)",
    duration: "30分鐘/集",
    genre: "科幻、英雄、正義",
    version: "日語原音、國語配音",
    rating: "普遍級",
    director: "手塚治虫",
    cast: "原子小金剛、天馬博士、茶水博士"
  },
  "7": {
    title: "鋼彈",
    img: "./img/M/鋼彈.png",
    date: "1979-04-07 (首播)",
    duration: "25分鐘/集",
    genre: "科幻、機甲、戰爭",
    version: "日語原音、粵語配音、國語配音",
    rating: "保護級",
    director: "富野由悠季",
    cast: "阿姆羅·雷、夏亞·阿茲納布爾"
  },
  "8": {
    title: "米老鼠",
    img: "./img/M/米奇.png",
    date: "1928-11-18 (首次登場)",
    duration: "8-15分鐘/集",
    genre: "卡通、經典、冒險",
    version: "英語原音、國語配音",
    rating: "普遍級",
    director: "華特·迪士尼",
    cast: "米奇、米妮、唐老鴨、高飛"
  }
};

// 2. 獲取元素
const modal = document.getElementById("movieModal");
const closeModal = document.querySelector(".close-modal");
const cards = document.querySelectorAll(".movie-card");

// 3. 綁定點擊事件
cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("id");
    const data = movieData[id];

    if (data) {
      // 替換彈窗內容
      document.getElementById("modalTitle").innerText = data.title;
      document.getElementById("modalImg").src = data.img;
      document.getElementById("modalDate").innerText = data.date;
      document.getElementById("modalDuration").innerText = data.duration;
      document.getElementById("modalGenre").innerText = data.genre;
      document.getElementById("modalVersion").innerText = data.version;
      document.getElementById("modalRating").innerText = data.rating;
      document.getElementById("modalDirector").innerText = data.director;
      document.getElementById("modalCast").innerText = data.cast;

      const orderBtn = document.getElementById("orderBtn");
      orderBtn.href = `./order.html?movie=${encodeURIComponent(data.title)}`;

      // 顯示彈窗 (使用 flex 是為了讓它垂直水平置中)
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // 防止背景捲動
    }
  });
});

// 4. 點擊關閉按鈕或遮罩層關閉
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});