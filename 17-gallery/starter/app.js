//***** Main ******/

//**** Class Gallery*****/

class Gallery {
  constructor(element) {
    this.gallery = element;
    this.images = [...element.querySelectorAll(".img")];

    this.modal = document.querySelector(".modal");
    this.modalContent = document.querySelector(".modal-content");
    this.modalImages = document.querySelector(".modal-images");
    this.mainImage = document.querySelector(".main-img");
    this.imageName = document.querySelector(".image-name");
    this.closeButton = document.querySelector(".close-btn");
    this.previousButton = document.querySelector(".prev-btn");
    this.nextButton = document.querySelector(".next-btn");

    this.gallery.addEventListener("click", (event) => {
      if (event.target.classList.contains("img")) {
        this.openModal(event.target, this.images);
      }
    });
  }

  getAndDisplayImagesInModal = (selectedImage, images) => {
    this.modalImages.innerHTML = images
      .map((image) => {
        return `<img
                  src="${image.src}"
                  title="${image.title}"
                  class="${
                    selectedImage.dataset.id === image.dataset.id
                      ? "modal-img selected"
                      : "modal-img"
                  }"
                  data-id="${image.dataset.id}"
                  alt=""
                />`;
      })
      .join("");
  };

  openModal = (selectedImage, images) => {
    this.modal.classList.add("open");
    this.getAndDisplayImagesInModal(selectedImage, images);
    this.setMainImage(selectedImage);
    this.modalContent.addEventListener("click", this.chooseImage);
    this.previousButton.addEventListener("click", this.selectPreviousMainImage);
    this.nextButton.addEventListener("click", this.selectNextMainImage);
    this.closeButton.addEventListener("click", this.closeModal);
  };

  setMainImage = (selectedImage) => {
    this.mainImage.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  };

  chooseImage = (event) => {
    if (event.target.classList.contains("modal-img")) {
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");
      this.setMainImage(event.target);
      event.target.classList.add("selected");
    }
  };

  selectPreviousMainImage = () => {
    const selected = this.modalImages.querySelector(".selected");
    const previousImage =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    previousImage.classList.add("selected");
    this.setMainImage(previousImage);
  };

  selectNextMainImage = () => {
    const selected = this.modalImages.querySelector(".selected");
    const nextImage =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    nextImage.classList.add("selected");
    this.setMainImage(nextImage);
  };

  closeModal = () => {
    this.modal.classList.remove("open");
    this.closeButton.removeEventListener("click", this.closeModal);
    this.previousButton.removeEventListener(
      "click",
      this.selectPreviousMainImage
    );
    this.nextButton.removeEventListener("click", this.selectNextMainImage);
  };
}

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
};

const natureGallery = new Gallery(getElement(".nature"));
const cityGallery = new Gallery(getElement(".city"));
