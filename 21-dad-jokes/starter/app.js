const url = "https://icanhazdadjoke.com/ss";

const randomDadJokeButton = document.querySelector(".btn");
const randomDadJokeResult = document.querySelector(".result");

const fetchDadJoke = async () => {
  randomDadJokeResult.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "text/plain",
      },
    });
    const data = await response.text();
    randomDadJokeResult.textContent = data;
    if (!response.ok) throw new Error("Whops");
  } catch (error) {
    randomDadJokeResult.textContent = "There was an error...";
  }
};

fetchDadJoke();

randomDadJokeButton.addEventListener("click", fetchDadJoke);
