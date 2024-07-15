const btn = document.getElementById("btn");
const input = document.getElementById("input");
const inputText = document.getElementById("input_text");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (emailRegex.test(input.value)) {
    input.style.border = "2px solid rgb(4, 253, 4)";
    inputText.classList.remove("error");
  } else if (!emailRegex.test(input.value)) {
    input.style.border = "2px solid rgb(255, 82, 99)";
    inputText.classList.add("error");
    inputText.textContent = "Please provide a valid email address";
  }
});
