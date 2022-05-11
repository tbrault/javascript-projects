// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalButton = document.querySelector(".modal-btn");
const closeModalButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
