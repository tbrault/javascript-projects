// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearButton = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** FUNCTIONS **********

//**** submit the form ****
const submit = (e) => {
  e.preventDefault();
  let item = grocery.value;
  if (item && !editFlag) {
    const id = new Date().getTime().toString();
    addItem(id, item);
    addtoLocalStorage(id, item);
    setBackToDefault();
    displayAlert("Item Added To List", "success");
  } else if (item && editFlag) {
    editElement.textContent = item;
    editLocalStorage(editID, item);
    setBackToDefault();
    displayAlert("Value Changed", "success");
  } else {
    displayAlert("Please Enter Value", "danger");
  }
};

// ***add item to the list****
const addItem = (id, item) => {
  let attribut = document.createAttribute("data-id");
  attribut.value = id;
  const article = document.createElement("article");
  article.classList.add("grocery-item");
  article.setAttributeNode(attribut);
  article.innerHTML = `<p class="title">${item}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  list.appendChild(article);
  const deleteButton = article.querySelector(".delete-btn");
  const editButton = article.querySelector(".edit-btn");
  deleteButton.addEventListener("click", deleteItem);
  editButton.addEventListener("click", editItem);
  container.classList.add("show-container");
};

// **** Set Back To Default ****
const setBackToDefault = () => {
  grocery.value = "";
  editFlag = false;
  editID = "";
};

// **** Display alert ****
const displayAlert = (message, typeOfAlert) => {
  alert.classList.add(`alert-${typeOfAlert}`);
  alert.textContent = message;
  setTimeout(() => {
    alert.classList.remove(`alert-${typeOfAlert}`);
    alert.textContent = "";
  }, 1000);
};

// **** Edit item ****
const editItem = (e) => {
  editElement = e.currentTarget.parentElement.previousElementSibling;
  editID = editElement.parentElement.dataset.id;
  grocery.value = editElement.textContent;
  editFlag = true;
};

// **** Clear Items ****
const clearItems = () => {
  list.innerHTML = "";
  clean("Empty List");
  localStorage.removeItem("list");
};

const deleteItem = (e) => {
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  list.removeChild(item);
  clean("item removed");
  removeFromLocalStorage(id);
};

const clean = (message) => {
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert(message, "danger");
  setBackToDefault();
};

// ****** LOCAL STORAGE **********

const addtoLocalStorage = (id, value) => {
  const grocery = { id, value };
  const items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
};

const removeFromLocalStorage = (id) => {
  const items = getLocalStorage();
  if (items.length > 1) {
    items.forEach((item) => {
      if (item.id === id) {
        items.pop(item);
      }
    });
    localStorage.setItem("list", JSON.stringify(items));
  } else {
    localStorage.removeItem("list");
  }
};

const editLocalStorage = (id, value) => {
  const items = getLocalStorage();
  items.forEach((item) => {
    if (item.id === id) {
      item.value = value;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};
// ****** SETUP ITEMS **********

const loadItems = () => {
  const items = getLocalStorage();
  items.forEach((item) => {
    addItem(item.id, item.value);
  });
};

// ****** EVENT LISTENERS **********
form.addEventListener("submit", submit);

clearButton.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", loadItems);
