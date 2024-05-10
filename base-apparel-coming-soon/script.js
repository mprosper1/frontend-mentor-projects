"use strict";

const emailArea = document.querySelector(".email__area");
const errorMessage = document.querySelector(".error__img");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const errorText = document.querySelector(".error__text");

const changer = function () {
  form.style.borderColor = "rgb(249, 98, 98)";
  form.style.borderWidth = "2px";
};

emailArea.addEventListener("click", changer);

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const error = function () {
  if (!emailRegex.test(emailArea.value)) {
    errorMessage.style.opacity = 100;
    errorText.style.opacity = 100;
  } else {
    errorMessage.style.opacity = 0;
    emailArea.value = "";
    errorText.style.opacity = 0;

    form.style.border = "1px solid var(--Dark-Grayish-Red)";
    form.style.borderBottom = "0.3px solid rgb(65, 58, 58, 0.2)";
    form.style.borderRight = " 0.3px solid rgb(65, 58, 58, 0.2)";
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  error();
});
