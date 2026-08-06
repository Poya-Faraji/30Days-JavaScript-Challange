const checkBoxes = document.querySelectorAll(".item > input");

let lastChecked;

function handleInputCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
  // this.target.value
}

checkBoxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleInputCheck),
);
