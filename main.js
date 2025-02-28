window.addEventListener("load", function () {
  let progress = 0;
  let progressText = document.getElementById("loading-text");
  let progressBar = document.querySelector(".bar-fill");

  let interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = progress + "%";
    progressText.innerText = "Loading " + progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 150); // Speed of progress
});
