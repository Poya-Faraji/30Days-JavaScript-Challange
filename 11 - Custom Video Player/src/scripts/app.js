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
video.addEventListener("timeupdate", handleProgressBar);

function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

function handleRangeUpdate() {
  const name = this.name;
  const value = parseFloat(this.value);

  video[name] = value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});

// handle video full screen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen?.();
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key === "enter" || key === "f") {
    toggleFullScreen();
  }
  if (key === " ") {
    togglePlay();
  }
});
