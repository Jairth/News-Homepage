const menu = document.querySelector(".menu-icon");
const overlay = document.querySelector(".header__overlay");
const nav = document.querySelector(".header__nav");
const body = document.querySelector('body')

menu.addEventListener("click", () => {
  overlay.classList.toggle("activo");
  nav.classList.toggle("activo");
  body.classList.toggle("activo");

  if (menu.classList.contains("no-move")) {
    menu.classList.remove("no-move");
    menu.classList.add("activo");
  } else if (menu.classList.contains("activo")) {
    menu.classList.remove("activo");
    menu.classList.add("no-move");
  }
});
