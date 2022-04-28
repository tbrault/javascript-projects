const switchButton = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

switchButton.addEventListener("click", () => {
  if (!switchButton.classList.contains("slide")) {
    switchButton.classList.add("slide");
    video.pause();
  } else {
    switchButton.classList.remove("slide");
    video.play();
  }
});
