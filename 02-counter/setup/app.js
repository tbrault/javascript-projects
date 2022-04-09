let counter = 0;
const display = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "decrease":
        display.innerText = --counter;
        break;

      case "increase":
        display.innerText = ++counter;
        break;

      default:
        counter = 0;
        display.innerText = counter;
        break;
    }
    colorChange();
  });
});

const colorChange = () => {
  if (counter < 0) display.style.color = "red";
  else if (counter > 0) display.style.color = "green";
  else display.style.color = "black";
};
