const btn = document.getElementById("btn");
const inputFirstName = document.getElementById("input_first_name");
const inputLastName = document.getElementById("input_last_name");
const inputEmail = document.getElementById("input_email");
const inputPassword = document.getElementById("input_password");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

////////////////////////////////
// ------------ FUNCTIONS ------------

function error() {
  // First Name
  if (inputFirstName.value === "") {
    inputFirstName.parentElement.children[1].classList.add("error");
    inputFirstName.parentElement.children[2].classList.add("error");
    inputFirstName.parentElement.children[2].textContent = `${inputFirstName.placeholder.toLowerCase()} cannot be empty`;

    inputFirstName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    inputFirstName.parentElement.children[1].classList.remove("error");
    inputFirstName.parentElement.children[2].classList.remove("error");

    inputFirstName.style.border = "2px solid hsl(154, 59%, 51%)";
  }

  // Last Name
  if (inputLastName.value === "") {
    inputLastName.parentElement.children[1].classList.add("error");
    inputLastName.parentElement.children[2].classList.add("error");
    inputLastName.parentElement.children[2].textContent = `${inputLastName.placeholder.toLowerCase()} cannot be empty`;

    inputLastName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    inputLastName.parentElement.children[1].classList.remove("error");
    inputLastName.parentElement.children[2].classList.remove("error");

    inputLastName.style.border = "2px solid hsl(154, 59%, 51%)";
  }

  // Email
  if (inputEmail.value === "") {
    inputEmail.parentElement.children[1].classList.add("error");
    inputEmail.parentElement.children[2].classList.add("error");
    inputEmail.parentElement.children[2].textContent = `email address cannot be empty`;

    inputEmail.style.border = "2px solid hsl(0, 100%, 74%)";

    inputEmail.placeholder = "email@example/com";
  } else if (emailRegex.test(inputEmail.value)) {
    // inputEmail.value = "";
    inputEmail.style.border = "2px solid hsl(154, 59%, 51%)";
    inputEmail.parentElement.children[1].classList.remove("error");
    inputEmail.parentElement.children[2].classList.remove("error");
  } else if (!emailRegex.test(inputEmail.value)) {
    inputEmail.parentElement.children[1].classList.add("error");
    inputEmail.parentElement.children[2].classList.add("error");
    inputEmail.parentElement.children[2].textContent = `email address is incorrect`;

    inputEmail.style.border = "2px solid hsl(0, 100%, 74%)";
  }

  // Password
  if (inputPassword.value === "") {
    inputPassword.parentElement.children[1].classList.add("error");
    inputPassword.parentElement.children[2].classList.add("error");
    inputPassword.parentElement.children[2].textContent = `${inputPassword.placeholder.toLowerCase()} cannot be empty`;

    inputPassword.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    inputPassword.parentElement.children[1].classList.remove("error");
    inputPassword.parentElement.children[2].classList.remove("error");

    inputPassword.style.border = "2px solid hsl(154, 59%, 51%)";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  error();
});
