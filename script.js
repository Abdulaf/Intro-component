"use strict";
// Elements
const form = document.querySelector("form");
const firstName = document.querySelector(".first-name-input");
const lastName = document.querySelector(".last-name-input");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");

// Error Messages
const firstNameError = document.querySelector(".first-name-error-text");
const lastNameError = document.querySelector(".last-name-error-text");
const emailError = document.querySelector(".email-error-text");
const passwordError = document.querySelector(".password-error-text");

// Error Images
const firstNameErrorImg = document.querySelector(".first-name-error-img");
const lastNameErrorImg = document.querySelector(".last-name-error-img");
const emailErrorImg = document.querySelector(".email-error-img");
const passwordErrorImg = document.querySelector(".password-error-img");

// Email Pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstNameValue = firstName.value;
  const lastNameValue = firstName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  let valid = true;

  firstNameError.classList.add("hidden");
  lastNameError.classList.add("hidden");
  emailError.classList.add("hidden");
  passwordError.classList.add("hidden");

  firstName.classList.remove("active--error");
  lastName.classList.remove("active--error");
  email.classList.remove("active--error");
  password.classList.remove("active--error");

  if (firstName.value === "") {
    firstNameError.classList.remove("hidden");
    firstNameErrorImg.classList.remove("hidden");
    firstName.classList.add("active--error");
    valid = false;
  }

  if (lastName.value === "") {
    lastNameError.classList.remove("hidden");
    lastName.classList.add("active--error");
    lastNameErrorImg.classList.remove("hidden");
    valid = false;
  }

  if (!emailPattern.test(email.value)) {
    emailError.classList.remove("hidden");
    emailErrorImg.classList.remove("hidden");
    email.classList.add("active--error");
    valid = false;
  }

  if (password.value === "") {
    passwordError.classList.remove("hidden");
    passwordErrorImg.classList.remove("hidden");
    password.classList.add("active--error");
    valid = false;
  }

  if (valid === true) {
    alert(
      `
      First Name : ${firstNameValue}
      Last Name : ${lastNameValue}
      Email : ${emailValue}
      Password : ${passwordValue}`
    );
    window.location.reload();
  }
});
