window.addEventListener("load", function () {
  // Get the elements
  let startButton = document.getElementById("start-btn");
  let progress = 0;
  let progressText = document.getElementById("loading-text");
  let progressBar = document.querySelector(".bar-fill");
  let loadingScreen = document.getElementById("loading-screen");

  // Event listener for the Start button
  startButton.addEventListener("click", function () {
    // Hide the start button and show the loading screen
    startButton.style.display = "none";
    loadingScreen.style.display = "flex";

    // Set the progress
    let interval = setInterval(() => {
      progress += 5;
      progressBar.style.width = progress + "%";
      progressText.innerText = "Loading " + progress + "%";

      // When progress reaches 100%, stop the interval and redirect
      if (progress >= 100) {
        clearInterval(interval);
        // Optionally, hide the loading screen and navigate to the main page
        setTimeout(() => {
          loadingScreen.style.display = "none"; // Hide loading screen
          // Redirect to main.html after loading is complete
          window.location.href = "pages/main.html";
        }, 500); // Delay to let the final 100% be visible
      }
    }, 150); // Speed of progress (can be adjusted)
  });
});

/* MAIN PAGE: FALLING LEAVES */
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // Random starting position at the top of the page
  leaf.style.left = `${Math.random() * window.innerWidth}px`;
  leaf.style.top = "0px"; // Start from the very top

  // Random animation duration for each leaf (falling time between 3s and 6s)
  const duration = 3 + Math.random() * 4; // Duration between 3s to s

  leaf.style.animationDuration = `${duration}s`; // Randomize fall time

  // Append leaf to container
  document.querySelector(".falling-leaves").appendChild(leaf);

  // Remove the leaf after animation duration
  setTimeout(() => {
    leaf.remove();
  }, duration * 500); // Match the duration of the animation (falling time)
}

// Generate leaves at a random interval (between 0.5s and 2s)
setInterval(createLeaf, Math.random() * 1500 + 500); // Random interval between 500ms to 2s

/* MAIN PAGE: FALLING LEAVES - END */

//MAYBE WILL USE LATER, FOR NOW COMMENTED OUT
/* CHARACTER MAIN PAGE FUNCTIONS 
function toggleSpeech() {
  let bubble = document.getElementById("speechBubble");
  bubble.style.display = bubble.style.display === "block" ? "none" : "block";
}

function optionSelected(option) {
  let pageMap = {
    About: "about.html",
    Skills: "skills.html",
    Projects: "projects.html",
  };

  if (pageMap[option]) {
    window.location.href = pageMap[option]; // Redirect to the selected page
  } else {
    console.error("No page found for option:", option);
  }
}
*/

/*
//GRASS GENERATOR
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const container = document.getElementById("grass");

  function resizeCanvas() {
    if (!container) return;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    generateGrass();
  }

  // Different shades of green for variety
  const grassColors = [
    "#228B22", // Forest Green
    "#32CD32", // Lime Green
    "#008000", // Green
    "#2E8B57", // Sea Green
  ];

  function generateGrass() {
    const PIXEL_SIZE = 4;
    for (let y = 0; y < canvas.height; y += PIXEL_SIZE) {
      for (let x = 0; x < canvas.width; x += PIXEL_SIZE) {
        let color = grassColors[Math.floor(Math.random() * grassColors.length)];
        ctx.fillStyle = color;
        ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas(); // Initial call after DOM is loaded
});

*/
