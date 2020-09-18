let burger = document.querySelector(".burger");
let nav = document.querySelector("ul");

burger.addEventListener("click", open);

function open() {
    nav.classList.toggle("nav-active");
}