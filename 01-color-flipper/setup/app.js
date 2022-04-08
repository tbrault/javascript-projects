const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
