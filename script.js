"use strict";

const passInput = document.getElementById("password");
const conInput = document.getElementById("conpassword");
const subButton = document.getElementById("submit-btn");

function validatePassword() {
  if (passInput.value !== conInput.value) {
    conInput.setCustomValidity("Passwords do not match");
  } else {
    conInput.setCustomValidity("");
  }
}

subButton.addEventListener("click", validatePassword);
