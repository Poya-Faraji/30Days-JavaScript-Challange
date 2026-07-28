const secondHandElem = document.querySelector(".second-hand");
const minuteHandElem = document.querySelector(".minute-hand");
const hourHandElem = document.querySelector(".hour-hand");
const h1Elem = document.querySelector(".time");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 60) * 360 + 90;

  if (secondDegrees === 90) {
    [secondHandElem, minuteHandElem, hourHandElem].forEach((elem) => {
      elem.style.transition = "none";

      setTimeout(() => {
        elem.style.transition = "all 0.06s cubic-bezier(0, 3.19, 0.58, 1)";
      }, 600);
    });
  }

  secondHandElem.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHandElem.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHandElem.style.transform = `rotate(${hoursDegrees}deg)`;

  h1Elem.textContent = `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
};
setInterval(setDate, 1000);
