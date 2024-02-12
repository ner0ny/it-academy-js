const clock = document.createElement("div");
document.body.appendChild(clock);

clock.style.width = "500px";
clock.style.height = "500px";
clock.style.backgroundColor = "#FCCA66";
clock.style.borderRadius = "50%";
clock.style.margin = "100px auto";
clock.style.position = "relative";

const delta = (Math.PI * 2) / 12;
let angle = 0;
const radius = 200;
const step = 215;

for (let i = 1; i < 13; i++) {
  const hour = document.createElement("div");
  clock.append(hour);
  hour.classList.add("hour");

  hour.style.width = "70px";
  hour.style.height = "70px";
  hour.style.backgroundColor = "#48B382";
  hour.style.borderRadius = "50%";
  hour.style.textAlign = "center";
  hour.style.lineHeight = "70px";
  hour.style.position = "absolute";
  hour.style.fontSize = "30px";
  hour.style.left = radius * Math.cos(angle) + step + "px";
  hour.style.top = radius * Math.sin(angle) + step + "px";
  angle += delta;

  hour.innerHTML = i + 2;
  if (hour.innerHTML > 12) {
    hour.innerHTML = i - 10;
  }
}

const hourArrow = document.createElement("div");
const minuteArrow = document.createElement("div");
const secondArrow = document.createElement("div");
clock.append(hourArrow);
clock.append(minuteArrow);
clock.append(secondArrow);
hourArrow.style.width = "150px";
hourArrow.style.height = "10px";
hourArrow.style.backgroundColor = "#000";
hourArrow.style.borderRadius = "5px";
hourArrow.style.position = "absolute";
hourArrow.style.top = "250px";
hourArrow.style.right = "235px";
hourArrow.style.transformOrigin = "100% 100%";

minuteArrow.style.width = "200px";
minuteArrow.style.height = "7px";
minuteArrow.style.backgroundColor = "#000";
minuteArrow.style.borderRadius = "5px";
minuteArrow.style.position = "absolute";
minuteArrow.style.top = "250px";
minuteArrow.style.right = "235px";
minuteArrow.style.transformOrigin = "100% 100%";

secondArrow.style.width = "230px";
secondArrow.style.height = "3px";
secondArrow.style.backgroundColor = "#000";
secondArrow.style.borderRadius = "3px";
secondArrow.style.position = "absolute";
secondArrow.style.top = "250px";
secondArrow.style.right = "235px";
secondArrow.style.transformOrigin = "100% 100%";

function getTime() {
  const times = new Date();

  let timeSec = (times.getSeconds() / 60) * 360 + 90;
  let timeMin =
    (times.getMinutes() / 60) * 360 + (times.getMinutes() / 60) * 6 + 90;
  let timeHour =
    (times.getHours() / 12) * 360 + (times.getMinutes() / 60) * 30 + 90;

  secondArrow.style.transform = `rotate( ${timeSec}deg)`;
  minuteArrow.style.transform = `rotate(${timeMin}deg)`;
  hourArrow.style.transform = `rotate(${timeHour}deg)`;
}

window.onload = function () {
  setInterval(getTime, 0);
};
