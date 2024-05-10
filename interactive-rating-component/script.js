"use strict";

const rate = document.querySelectorAll(".numbers");
const btn = document.querySelector(".btn__submit");
const firstSection = document.querySelector(".first__page--section");
const secondSection = document.querySelector(".second__page--section");
const pressedNumber = document.querySelector(".pressed__number--part");
const arr = document.querySelector(".larr");

let selected;
rate.forEach((ratingValue) => {
  ratingValue.addEventListener("click", (e) => {
    selected = e.target.textContent;
    const rateEl = e.target;

    removeHighlight();
    rateEl.classList.toggle("highlight");
  });
});

// console.log(numbers);

function removeHighlight() {
  const rate = document.querySelectorAll(".numbers");
  rate.forEach((el) => {
    el.classList.remove("highlight");
  });
}

// toggle
const changeSection = function () {
  firstSection.classList.toggle("hidden");
  secondSection.classList.toggle("hidden");
};

btn.addEventListener("click", function () {
  if (selected === undefined) return;
  else {
    changeSection();
    pressedNumber.textContent = selected;
  }
});

arr.addEventListener("click", function () {
  removeHighlight();
  changeSection();
});
