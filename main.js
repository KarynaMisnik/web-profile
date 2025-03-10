window.addEventListener("load", function () {
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

/* MAIN PAGE: FALLING LEAVES - END */
