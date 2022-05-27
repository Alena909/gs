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

let date = new Date();
let year = date.getFullYear();

document.querySelector(".year span").innerText = year;
