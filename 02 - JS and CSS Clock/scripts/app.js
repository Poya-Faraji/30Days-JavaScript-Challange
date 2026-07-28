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

  secondHandElem.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHandElem.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHandElem.style.transform = `rotate(${hoursDegrees}deg)`;


  h1Elem.textContent =`${hours}:${minutes}:${seconds}`;
};
setInterval(setDate, 1000);
