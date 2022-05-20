const numbers = Array.from(document.querySelectorAll(".number"));

const updateNumbers = (htmlElement) => {
  const finalValue = parseInt(htmlElement.dataset.value);
  const increment = Math.ceil(finalValue / 1000);
  let initialValue = 0;

  const increaseNumber = setInterval(() => {
    initialValue += increment;
    if (initialValue > finalValue) {
      htmlElement.textContent = `${finalValue}+`;
      clearInterval(increaseNumber);
      return;
    }
    htmlElement.textContent = `${initialValue}+`;
  }, 1);
};

for (const number of numbers) {
  updateNumbers(number);
}
