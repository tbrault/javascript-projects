const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const getRandomIndice = () => {
  return Math.floor(Math.random() * colors.length);
};

const getRandomColor = () => {
  return colors[getRandomIndice()];
};

const changeBackgroundColor = () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};

btn.addEventListener("click", changeBackgroundColor);
