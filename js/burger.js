function toggleMenu() {
    const menu = document.querySelector(".mobile_menu");
    const overlay = document.querySelector(".menu_overlay");
    const burger = document.querySelector(".burger_btn");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    burger.classList.toggle("active");
}