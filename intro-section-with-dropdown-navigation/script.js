"use strict";

const btnReveal = document.querySelectorAll(".btn_reveal");
const btnOpen = document.querySelector(".btn_open");
const openBtn = document.querySelector(".background");
const closeBtn = document.querySelector(".close_btn");
const btnMenu = document.querySelectorAll(".btn_menu_active");

btnReveal.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.target.parentElement.nextElementSibling.classList.toggle("show");
    e.target.parentElement.children[1].classList.toggle("turn");
  })
);

btnOpen.addEventListener("click", () => {
  openBtn.classList.remove("close");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.add("close");
});

btnMenu.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.parentElement.nextElementSibling.classList.toggle("menu_active");

    e.target.parentElement.children[1].classList.toggle("turn");

    e.target.parentElement.children[1].style.transition = "transform 0.3s";
  });
});
