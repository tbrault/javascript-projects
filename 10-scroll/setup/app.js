// ********** set date ************
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();

// ********** close links ************
const toggleButton = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleButton.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > navBar.getBoundingClientRect().height) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (window.pageYOffset > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navBarHeight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navBarHeight;

    if (!fixedNav) {
      position = position - navBarHeight;
    }

    if (navBarHeight > 82) {
      position = position + linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
