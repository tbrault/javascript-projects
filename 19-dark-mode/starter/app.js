import { articles } from "./data.js";

const toggleButton = document.querySelector(".btn");
const articlesSection = document.querySelector(".articles");

const toggleColorMode = () => {
  document.documentElement.classList.toggle("dark-theme");
};

toggleButton.addEventListener("click", toggleColorMode);

articlesSection.innerHTML = articles
  .map(({ title, date, length, snippet } = article) => {
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span> <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");
