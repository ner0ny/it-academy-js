const svgNS = "http://www.w3.org/2000/svg";

const svg = document.querySelector("svg");

let circle = document.createElementNS(svgNS, "circle");

circle.setAttributeNS(null, "cx", "250px");
circle.setAttributeNS(null, "cy", "250px");
circle.setAttributeNS(null, "r", "250px");
circle.setAttributeNS(null, "fill", "#FCCA66");

svg.append(circle);

const delta = (Math.PI * 2) / 12;
let angle = 0;
const radius = 200;
const step = 250;

for (let i = 1; i < 13; i++) {
  let hour = document.createElementNS(svgNS, "circle");
  let text = document.createElementNS(svgNS, "text");

  let x = radius * Math.cos(angle) + step;
  let y = radius * Math.sin(angle) + step;

  hour.setAttributeNS(null, "cx", x);
  hour.setAttributeNS(null, "cy", y);
  hour.setAttributeNS(null, "r", "35px");
  hour.setAttributeNS(null, "fill", "#48B382");

  text.setAttributeNS(null, "font-size", "30px");
  text.textContent = i + 2;
  if (text.textContent > 12) {
    text.textContent = i - 10;
  }
  if (text.textContent > 9) {
    text.setAttributeNS(null, "x", x - 14);
    text.setAttributeNS(null, "y", y + 8);
  } else {
    text.setAttributeNS(null, "x", x - 7);
    text.setAttributeNS(null, "y", y + 8);
  }

  svg.append(hour);
  svg.append(text);
  angle += delta;
}

let hourArrow = document.createElementNS(svgNS, "line");
let minuteArrow = document.createElementNS(svgNS, "line");
let secondArrow = document.createElementNS(svgNS, "line");

secondArrow.setAttributeNS(null, "x1", "250px");
secondArrow.setAttributeNS(null, "y1", "250px");
secondArrow.setAttributeNS(null, "x2", "250px");
secondArrow.setAttributeNS(null, "y2", "16px");
secondArrow.setAttributeNS(null, "stroke", "black");
secondArrow.setAttributeNS(null, "stroke-width", 4);

minuteArrow.setAttributeNS(null, "x1", "250px");
minuteArrow.setAttributeNS(null, "y1", "250px");
minuteArrow.setAttributeNS(null, "x2", "250px");
minuteArrow.setAttributeNS(null, "y2", "50px");
minuteArrow.setAttributeNS(null, "stroke", "black");
minuteArrow.setAttributeNS(null, "stroke-width", 5);

hourArrow.setAttributeNS(null, "x1", "250px");
hourArrow.setAttributeNS(null, "y1", "250px");
hourArrow.setAttributeNS(null, "x2", "250px");
hourArrow.setAttributeNS(null, "y2", "100px");
hourArrow.setAttributeNS(null, "stroke", "black");
hourArrow.setAttributeNS(null, "stroke-width", 8);

svg.append(secondArrow);
svg.append(minuteArrow);
svg.append(hourArrow);

let timer = document.createElementNS(svgNS, "text");
timer.setAttributeNS(null, "x", "160px");
timer.setAttributeNS(null, "y", "160px");
timer.setAttributeNS(null, "font-size", "50px");
timer.setAttributeNS(null, "fill", "red");
svg.append(timer);
function getTime() {
  const times = new Date();
  let timeSec = 6 * times.getSeconds();
  let timeMin = 6 * times.getMinutes();
  let timeHour = 30 * (times.getHours() % 12) + times.getMinutes() / 2;

  secondArrow.setAttributeNS(
    null,
    "transform",
    "rotate(" + timeSec + " 250 250)"
  );
  minuteArrow.setAttributeNS(
    null,
    "transform",
    "rotate(" + timeMin + " 250 250)"
  );
  hourArrow.setAttributeNS(
    null,
    "transform",
    "rotate(" + timeHour + " 250 250)"
  );

  if (
    times.getHours() < 10 &&
    times.getSeconds() < 10 &&
    times.getMinutes() < 10
  ) {
    timer.textContent = `0${times.getHours()}:0${times.getMinutes()}:0${times.getSeconds()}`;
  } else if (times.getHours() < 10 && times.getMinutes() < 10) {
    timer.textContent = `0${times.getHours()}:0${times.getMinutes()}:${times.getSeconds()}`;
  } else if (times.getHours() < 10 && times.getSeconds() < 10) {
    timer.textContent = `0${times.getHours()}:${times.getMinutes()}:0${times.getSeconds()}`;
  } else if (times.getSeconds() < 10 && times.getMinutes() < 10) {
    timer.textContent = `${times.getHours()}:0${times.getMinutes()}:0${times.getSeconds()}`;
  } else if (times.getSeconds() < 10) {
    timer.textContent = `${times.getHours()}:${times.getMinutes()}:0${times.getSeconds()}`;
  } else if (times.getMinutes() < 10) {
    timer.textContent = `${times.getHours()}:0${times.getMinutes()}:${times.getSeconds()}`;
  } else if (times.getHours() < 10) {
    timer.textContent = `0${times.getHours()}:${times.getMinutes()}:${times.getSeconds()}`;
  } else {
    timer.textContent = `${times.getHours()}:${times.getMinutes()}:${times.getSeconds()}`;
  }
}

window.onload = function () {
  setInterval(getTime, 1000);
};
