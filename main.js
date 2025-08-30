const switchEl = document.getElementById("switch");
const portraitEl = document.getElementById("portrait");

let isOn = false;

switchEl.addEventListener("click", () => {
  isOn = !isOn;
  switchEl.src = isOn ? "images/switch-on.png" : "images/switch.png";
  portraitEl.src = isOn
    ? "images/portfolio-pic-colored.png"
    : "images/portfolio-pic.png";
});
