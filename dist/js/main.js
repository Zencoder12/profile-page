const menuBtn = document.querySelector(".menu-btn");
const hamburguer = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
// returns an array of all items within this class
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

/* The Element.classList is a read-only property that returns a live DOMTokenList 
collection of the class attributes of the element. This can then be used to 
manipulate the class list.*/

function toggleMenu() {
  if (!showMenu) {
    hamburguer.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburguer.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
