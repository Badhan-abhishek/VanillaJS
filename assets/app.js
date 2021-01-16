// Movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  container.style.transition = "all 1s ease-in";

  card.style.transition = "none";
  // Popout

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotate(-40deg)";
  purchase.style.transform = "translateZ(110px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(120px)";
});

container.addEventListener("mouseleave", () => {
  card.style.transition = "all 1s ease-in";
  card.style.transform = `rotate(0deg) rotate(0deg)`;
  // popback
  title.style.transform = "translateZ(0)";
  sneaker.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
});
