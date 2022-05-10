const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//select items from html
const dateHtml = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeItems = document.querySelectorAll(".deadline-format h4");

//create dates
const tempDate = new Date();
const futureDate = new Date(
  tempDate.getFullYear(),
  tempDate.getMonth(),
  tempDate.getDate() + 10,
  11,
  30
);

//set variables
const weekday = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

//insert giveaway html
let formattedDate = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;
dateHtml.textContent = formattedDate;

const getRemainingTime = () => {
  const currentDate = new Date();
  let remainingTime = futureDate.getTime() - currentDate.getTime();

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let remainingDay = Math.floor(remainingTime / oneDay);
  let remainingHours = Math.floor((remainingTime % oneDay) / oneHour);
  let remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let remainingSecondes = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [
    remainingDay,
    remainingHours,
    remainingMinutes,
    remainingSecondes,
  ];

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  timeItems.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Time expired</h4>`;
  }
};

//countdown
let countdown = setInterval(getRemainingTime, 1000);

//init
getRemainingTime();
