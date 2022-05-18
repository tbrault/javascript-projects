class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetButton = element.querySelector(".reset");
    this.increaseButton = element.querySelector(".increase");
    this.decreaseButton = element.querySelector(".decrease");
    this.display = element.querySelector(".value");
    this.display.textContent = this.value;

    this.resetButton.addEventListener("click", this.resetValue);
    this.increaseButton.addEventListener("click", this.increaseValue);
    this.decreaseButton.addEventListener("click", this.decreaseValue);

    this.colorChange();
  }

  colorChange = () => {
    if (this.value < 0) this.display.style.color = "red";
    else if (this.value > 0) this.display.style.color = "green";
    else this.display.style.color = "black";
  };

  resetValue = () => {
    this.value = 0;
    this.display.textContent = this.value;
    this.colorChange();
  };

  increaseValue = () => {
    this.display.textContent = ++this.value;
    this.colorChange();
  };

  decreaseValue = () => {
    this.display.textContent = --this.value;
    this.colorChange();
  };
}

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check ${selection}`);
};

const firstCounter = new Counter(getElement(".first-counter"), 10);
const secondCounter = new Counter(getElement(".second-counter"), 20);
