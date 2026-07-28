const inputs = document.querySelectorAll("input");

const handleInputChange = (e) => {
  const suffix = e.target.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix,
  );
};

inputs.forEach((input) => {
  input.addEventListener("mouseover", handleInputChange);
  input.addEventListener("change", handleInputChange);
});
