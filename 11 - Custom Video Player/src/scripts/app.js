const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");

const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  const icon = video.paused ? "▶" : "⏸";
  toggle.textContent = icon;
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// handle button update based on pause
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});
