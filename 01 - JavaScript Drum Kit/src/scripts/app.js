const allKeys = document.querySelectorAll(".key");

const playAudioWithAnimation = (e) => {
  const userKey = e.key.toLowerCase();

  const audio = document.querySelector(`audio[data-key="${userKey}"]`);
  const key = document.querySelector(`.key[data-key="${userKey}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

document.addEventListener("keydown", playAudioWithAnimation);

const handleTransitionend = (e) => {
  if (e.propertyName === "scale") {
    e.target.classList.remove("playing");
  }
};

allKeys.forEach((key) => {
  key.addEventListener("transitionend", handleTransitionend);
});
