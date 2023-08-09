"use strict";
import "./styles/main.scss";

//Attaching the hero img
document.querySelector(".hero").style.backgroundImage =
  "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/sunset.webp')";

//loader set up
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    // document.querySelector(".loader").style.opacity = "1";
  } else {
    setTimeout(function () {
      document.querySelector(".loader").classList.add("hidden");
      document.querySelector("body").style.visibility = "visible";
    }, 1000);
  }
};

//Making the mobile nav working
document.querySelector(".header__btn").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("header__open");
});

//close nav on link click
const navLinksEl = document.querySelectorAll(".header__item a");

navLinksEl.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".header").classList.remove("header__open");
  });
});
const faviconEls = document.querySelector('link[rel="icon"]');
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  faviconEls.setAttribute("href", "assets/trenkler_logo_white.webp");
}

let titles = ["Title 1", "Title 2", "Title 3"];

function changeTitle() {
  document.querySelector(".hero__title").textContent =
    titles[Math.floor(Math.random() * titles.length)];
}
changeTitle();
