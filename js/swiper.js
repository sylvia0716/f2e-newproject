// 初始化 Swiper
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    coverflowEffect: { 
        rotate: 0, 
        stretch: 0, 
        depth: 120, 
        modifier: 2.5, 
        slideShadows: false 
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true
    },
    navigation: false
});

// 綁定左右按鈕
const btnPrev = document.querySelector('.swiper-button-prev');
const btnNext = document.querySelector('.swiper-button-next');

if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => swiper.slidePrev());
    btnNext.addEventListener('click', () => swiper.slideNext());
}
