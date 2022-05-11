// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

let image = document.getElementById("person-img");
let name = document.getElementById("author");
let job = document.getElementById("job");
let text = document.getElementById("info");

let newReview = {};
let id = 1;

const getRandomIndice = () => {
  return Math.floor(Math.random() * reviews.length);
};

const getNewReview = (id) => {
  for (let review of reviews) {
    if (review.id === id) {
      return review;
    }
  }
};

const updateCurrentReview = (newReview) => {
  image.src = newReview.img;
  name.textContent = newReview.name;
  job.textContent = newReview.job;
  text.textContent = newReview.text;
  id = newReview.id;
};

const getPreviousReview = () => {
  if (id === 1) {
    id = 4;
  } else {
    id--;
  }
  newReview = getNewReview(id);
  updateCurrentReview(newReview);
};

const getNextReview = () => {
  if (id === 4) {
    id = 1;
  } else {
    id++;
  }
  newReview = getNewReview(id);
  updateCurrentReview(newReview);
};

const getRandomReview = () => {
  newReview = reviews[getRandomIndice()];
  updateCurrentReview(newReview);
};

previousButton.addEventListener("click", getPreviousReview);
nextButton.addEventListener("click", getNextReview);
randomButton.addEventListener("click", getRandomReview);
