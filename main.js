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

/* DIALOG BOX */
function showDialogue(text) {
  const dialogueBox = document.querySelector(".dialogue-box");
  const dialogueText = document.getElementById("dialogue-text");

  dialogueBox.style.opacity = "1"; // Show the box

  let i = 0;
  dialogueText.innerHTML = ""; // Clear previous text

  function typeLetter() {
    if (i < text.length) {
      dialogueText.innerHTML += text[i];
      i++;
      setTimeout(typeLetter, 50); // Adjust speed here (50ms per letter)
    }
  }

  typeLetter();
}

// Example: Show dialogue when clicking a button
document.getElementById("start-btn").addEventListener("click", function () {
  showDialogue("Welcome to my portfolio! Let's start the adventure.");
});
