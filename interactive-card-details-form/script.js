"use strict";

const btnConfirm = document.getElementById("btn_confirm");
const btnContinue = document.getElementById("btn_continue");
const cvv = document.querySelector(".cvv");
const cardNumber = document.querySelector(".card_number");
const name = document.querySelector(".name");
const date = document.querySelector(".date");
const inputCardName = document.querySelector(".input_card_name");
const inputCardNumber = document.querySelector(".input_card_number");
const inputMonth = document.querySelector(".input_month");
const inputYear = document.querySelector(".input_year");
const inputCvvNumber = document.querySelector(".input_cvv_number");
const inputPage = document.querySelector(".bottom_01");
const finishPage = document.querySelector(".bottom_02");

let formatted;

function checker() {
  if (inputCvvNumber.value == "") {
    inputCvvNumber.nextElementSibling.style.visibility = "visible";
    inputCvvNumber.nextElementSibling.textContent = "Can't be blank";
    inputCvvNumber.style.border = "2px solid red";
  } else {
    cvv.textContent = inputCvvNumber.value;

    inputCvvNumber.nextElementSibling.style.visibility = "hidden";
    inputCvvNumber.style.border = "1px solid rgb(222, 221, 223)";
  }

  if (inputCardNumber.value == "") {
    inputCardNumber.nextElementSibling.style.visibility = "visible";
    inputCardNumber.nextElementSibling.textContent = "Can't be blank";
    inputCardNumber.style.border = "2px solid red";
  } else {
    cardNumber.textContent = formatted;

    inputCardNumber.nextElementSibling.style.visibility = "hidden";
    inputCardNumber.style.border = "1px solid rgb(222, 221, 223)";
  }

  if (inputCardName.value == "") {
    inputCardName.nextElementSibling.style.visibility = "visible";
    inputCardName.nextElementSibling.textContent = "Can't be blank";
    inputCardName.style.border = "2px solid red";
  } else {
    name.textContent = inputCardName.value.toUpperCase();

    inputCardName.nextElementSibling.style.visibility = "hidden";
    inputCardName.style.border = "1px solid rgb(222, 221, 223)";
  }

  if (inputMonth.value == "") {
    inputMonth.parentElement.nextElementSibling.style.visibility = "visible";
    inputMonth.parentElement.nextElementSibling.textContent = "Can't be blank";
    inputMonth.style.border = "2px solid red";
  } else {
    date.children[0].textContent = inputMonth.value;

    inputMonth.parentElement.nextElementSibling.style.visibility = "hidden";
    inputMonth.style.border = "1px solid rgb(222, 221, 223)";
  }

  if (inputYear.value == "") {
    inputYear.style.border = "2px solid red";

    inputMonth.parentElement.nextElementSibling.style.visibility = "visible";
    inputMonth.parentElement.nextElementSibling.textContent = "Can't be blank";
  } else {
    date.children[1].textContent = inputYear.value;

    inputMonth.parentElement.nextElementSibling.style.visibility = "hidden";
    inputYear.style.border = "1px solid rgb(222, 221, 223)";
  }
}

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();

  const input = inputCardNumber.value; // Example input "123456789012"

  // Validate that the input contains only numbers
  const numberOnlyRegex = /^\d+$/;

  if (numberOnlyRegex.test(input)) {
    // Add a space every fourth number
    formatted = input.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  checker();

  if (
    inputCvvNumber.value &&
    inputCardNumber.value &&
    inputCardName.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvvNumber.value
  ) {
    inputPage.classList.toggle("hide");
    finishPage.classList.toggle("hide");
  }
});

btnContinue.addEventListener("click", () => {
  inputPage.classList.toggle("hide");
  finishPage.classList.toggle("hide");

  location.reload(true);
});

inputCardName.addEventListener("input", () => {
  if (/\d/.test(inputCardName.value)) {
    inputCardName.nextElementSibling.style.visibility = "visible";
    inputCardName.nextElementSibling.textContent = "Numbers are not allowed";
    inputCardName.style.border = "2px solid red";
  } else {
    inputCardName.nextElementSibling.style.visibility = "hidden";
    inputCardName.style.border = "1px solid rgb(222, 221, 223)";
  }
});
