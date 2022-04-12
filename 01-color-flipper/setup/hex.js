const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const getRandomIndice = () => {
  return Math.floor(Math.random() * hex.length);
};

const getRandomHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomIndice()];
  }
  return hexColor;
};

const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};

btn.addEventListener("click", changeBackgroundColor);
