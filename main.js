const switchEl = document.getElementById("switch");
const portraitEl = document.getElementById("portrait");

let isOn = false;

switchEl.addEventListener("click", () => {
  isOn = !isOn;
  switchEl.src = isOn ? "./images/switch-on.png" : "./images/switch.png";
  portraitEl.src = isOn
    ? "./images/portfolio-pic-colored.png"
    : "./images/portfolio-pic.png";
});

/* Skills Section */
const skills = [
  "karyna@portfolio:~$ skills",
  "html css javascript",
  "react vite mui",
  "sql java(basic) c(basic)",
  "git github agile",
  "",
];

const output = document.getElementById("skills-output");
let line = 0;
let char = 0;

function typeSkill() {
  if (line < skills.length) {
    if (char < skills[line].length) {
      output.textContent += skills[line][char];
      char++;
      setTimeout(typeSkill, 40); // typing speed (ms per character)
    } else {
      output.textContent += "\n";
      line++;
      char = 0;
      setTimeout(typeSkill, 150); // pause between lines
    }
  }
}

typeSkill();

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();
