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

/* INDEX PAGE: FALLING LEAVES */
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
