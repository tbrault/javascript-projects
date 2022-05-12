// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const item = document.querySelector(".grocery-item");
const clearButton = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** FUNCTIONS **********
const addItem = (e) => {
  e.preventDefault();
  isGroceryEmpty();
};

const displayGreenAlert = () => {
  alert.classList.add("alert-success");
  setTimeout(() => {
    alert.classList.remove("alert-success");
    alert.textContent = "";
  }, 1000);
};

const displayRedAlert = () => {
  alert.classList.add("alert-danger");
  setTimeout(() => {
    alert.classList.remove("alert-danger");
    alert.textContent = "";
  }, 1000);
};

const isGroceryEmpty = () => {
  if (grocery.value === "") {
    displayRedAlert();
    alert.textContent = "Please Enter Value";
  } else {
    displayGreenAlert();
    alert.textContent = "Item Added To The List";
  }
};

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

clearButton.addEventListener("click", () => {
  displayRedAlert();
  alert.textContent = "Empty List";
});

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
