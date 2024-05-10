let arrow_menu = document.querySelector(".click-menu");
let menu = document.querySelector(".box-hidden");
arrow_menu.onclick = function () {
  menu.classList.toggle("translate-menu");
};
let shownav = document.querySelector(".bar");
let nav = document.querySelector(".nav-mobile");
shownav.onclick = () => {
  nav.classList.remove("hide");
  shownav.style.opacity = "0";
};
let hidenav = document.querySelector(".close");
{
  hidenav.onclick = () => {
    nav.classList.add("hide");
    shownav.style.opacity = "1";
  };
}
let arrow_Tabletmenu = document.querySelector(".tablet-clickmenu .arrow");
let tablet_menu = document.querySelector(".tablet-menu");
arrow_Tabletmenu.onclick = function () {
  tablet_menu.classList.toggle("translate-menu");
};

// code t
