const loadAn = () => {
  return lottie.loadAnimation({
    container: document.querySelector(".animation"), // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./animations/74216-animated-flames.json", // the path to the animation json
  });
};
loadAn();

const loadAnCat = () => {
  return lottie.loadAnimation({
    container: document.querySelector(".animation1"), // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./animations/14592-loader-cat.json", // the path to the animation json
  });
};
loadAnCat();

const loadAnDog = () => {
  return lottie.loadAnimation({
    container: document.querySelector(".animation2"), // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./animations/19937-happy-dog.json", // the path to the animation json
  });
};
loadAnDog();

let date = new Date();
let year = date.getFullYear();

document.querySelector(".year span").innerText = year;
