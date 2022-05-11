const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");
const toggleButton = document.querySelector(".sidebar-toggle");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
