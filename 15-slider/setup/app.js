const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
prevButton.style.display = "none";

nextButton.addEventListener("click", (e) => {
  counter++;
  changeSlideTransformStyleProperty();
  if (counter === slides.length - 1) {
    e.target.style.display = "none";
  } else {
    e.target.previousElementSibling.style.display = "flex";
  }
});

prevButton.addEventListener("click", (e) => {
  counter--;
  changeSlideTransformStyleProperty();
  if (counter === 0) {
    e.target.style.display = "none";
  } else {
    e.target.nextElementSibling.style.display = "flex";
  }
});

const changeSlideTransformStyleProperty = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
