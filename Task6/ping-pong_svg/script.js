const main = document.createElement("div");
main.classList.add("main");
document.body.prepend(main);

const startButton = document.createElement("button");
startButton.classList.add("startButton");
startButton.textContent = "Старт!";
main.prepend(startButton);

const svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");
svg.setAttributeNS(null, "width", 700);
svg.setAttributeNS(null, "height", 400);
svg.setAttributeNS(null, "id", "svg");
main.append(svg);

const w = parseFloat(svg.getAttributeNS(null, "width"));
const h = parseFloat(svg.getAttributeNS(null, "height"));

const svgText = document.createElementNS(svgNS, "svg");
svgText.setAttributeNS(null, "width", w);
svgText.setAttributeNS(null, "height", h / 10);
startButton.after(svgText);

const score = document.createElementNS(svgNS, "text");
score.setAttributeNS(null, "x", "50%");
score.setAttributeNS(null, "y", "70%");
score.setAttributeNS(null, "text-anchor", "middle");
score.setAttributeNS(null, "fill", "red");
score.setAttributeNS(null, "font-size", "40px");
score.setAttributeNS(null, "font-weight", "bold");
score.setAttributeNS(null, "id", "score");

let playerLeft = 0;
let playerRight = 0;
score.textContent = `${playerLeft}:${playerRight}`;
svgText.append(score);

function drawSVGElements() {
  const field = document.createElementNS(svgNS, "rect");
  field.setAttributeNS(null, "width", w);
  field.setAttributeNS(null, "height", h);
  field.setAttributeNS(null, "fill", "#f0ee7e");
  field.setAttributeNS(null, "stroke", "black");
  field.setAttributeNS(null, "id", "field");

  const racketLeft = document.createElementNS(svgNS, "rect");
  racketLeft.setAttributeNS(null, "width", w / 50);
  racketLeft.setAttributeNS(null, "height", h / 4);
  racketLeft.setAttributeNS(null, "fill", "#09aa57");
  racketLeft.setAttributeNS(null, "x", 0);
  racketLeft.setAttributeNS(null, "y", 0);
  racketLeft.setAttributeNS(null, "id", "racketLeft");

  const racketRight = document.createElementNS(svgNS, "rect");
  racketRight.setAttributeNS(null, "width", w / 50);
  racketRight.setAttributeNS(null, "height", h / 4);
  racketRight.setAttributeNS(null, "fill", "#191497");
  racketRight.setAttributeNS(null, "x", w - w / 50);
  racketRight.setAttributeNS(null, "y", 0);
  racketRight.setAttributeNS(null, "id", "racketRight");

  const ball = document.createElementNS(svgNS, "circle");
  ball.setAttributeNS(null, "cx", w / 2);
  ball.setAttributeNS(null, "cy", h / 2);
  ball.setAttributeNS(null, "r", h / 20);
  ball.setAttributeNS(null, "fill", "red");
  ball.setAttributeNS(null, "id", "ball");
  ball.classList.add("invzb");

  svg.prepend(field, racketLeft, racketRight, ball);
}

drawSVGElements();

const winner = document.createElementNS(svgNS, "text");
winner.setAttributeNS(null, "x", "50%");
winner.setAttributeNS(null, "y", "50%");
winner.setAttributeNS(null, "text-anchor", "middle");
winner.setAttributeNS(null, "fill", "red");
winner.setAttributeNS(null, "font-size", "30px");
svg.append(winner);

function start() {
  ball.classList.remove("invzb");
  startButton.setAttribute("disabled", "disabled");
  winner.textContent = "";
  cx = w / 2;
  cy = h / 2;
  requestAnimationFrame(tick);
}

const timer = document.createElementNS(svgNS, "text");
timer.setAttributeNS(null, "x", "50%");
timer.setAttributeNS(null, "y", "50%");
timer.setAttributeNS(null, "fill", "red");
timer.setAttributeNS(null, "font-size", "30px");
timer.setAttributeNS(null, "font-weight", "bold");
svg.append(timer);

let i = 3;

function gameTimer() {
  ball.classList.add("invzb");

  if (playerLeft === 5 || playerRight === 5) {
    winner.textContent =
      playerLeft === 5 ? "playerLeft победитель!" : "playerRight победитель!";
    startButton.removeAttribute("disabled");
    playerLeft = 0;
    playerRight = 0;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    return;
  }
  timer.textContent = ` ${i} `;
  i--;
  if (i < 0) {
    timer.textContent = "";
    i = 3;
    start();
  } else {
    setTimeout(gameTimer, 1000);
  }
}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let cx = parseFloat(ball.getAttributeNS(null, "cx"));
let cy = parseFloat(ball.getAttributeNS(null, "cy"));
let r = parseFloat(ball.getAttributeNS(null, "r"));
// let speedX = getRandomNum(2, 5);
// let speedY = getRandomNum(2, 5);

let speedX = getRandomNum(1, 1);
let speedY = getRandomNum(1, 1);

function tick() {
  cx += speedX;
  // дотронулся ли мяч до левой ракетки
  if (cx - r < w / 50) {
    if (cy - r >= y1 && cy - r <= y1 + h / 4) {
      speedX = -speedX;
      cx = w / 50 + r;
    }
  }

  // дотронулся ли мяч до правой ракетки
  if (cx + r > w - w / 50) {
    if (cy >= y2 && cy <= y2 + h / 4) {
      speedX = -speedX;
      cx = w - w / 50 - r;
    }
  }

  // дотронулся ли мяч до левой границы
  if (cx - r < 0) {
    playerRight++;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    gameTimer();
    return;
  }

  // дотронулся ли мяч до правой границы
  if (cx + r > w) {
    playerLeft++;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    gameTimer();
    return;
  }

  cy += speedY;
  // вылетел ли мяч ниже пола
  if (cy + r > h) {
    speedY = -speedY;
    cy = h - r;
  }

  // вылетел ли мяч выше потолка
  if (cy - r < 0) {
    speedY = -speedY;
    cy = r;
  }

  ball.style.transform = `translate(${cx - w / 2}px,${cy - h / 2}px)`;
  requestAnimationFrame(tick);
}

startButton.addEventListener("click", start);

let racketLeft = document.querySelector("#racketLeft");
let y1 = parseFloat(racketLeft.getAttributeNS(null, "y"));

let racketRight = document.querySelector("#racketRight");
let y2 = parseFloat(racketRight.getAttributeNS(null, "y"));

let buttonControl = true;
let buttonShift = true;
let buttonArrowUp = true;
let buttonArrowDown = true;

function trueShift() {
  if (buttonShift === true && y1 > 0) {
    y1 -= 5;
    racketLeft.style.transform = `translate(0,${y1}px)`;
    setTimeout(trueShift, 10);
  }
}

function trueControl() {
  if (buttonControl === true && y1 + h / 4 < h) {
    y1 += 5;
    racketLeft.style.transform = `translate(0,${y1}px)`;
    setTimeout(trueControl, 10);
  }
}

function trueArrowUp() {
  if (buttonArrowUp === true && y2 > 0) {
    y2 -= 5;
    racketRight.style.transform = `translate(0,${y2}px)`;
    setTimeout(trueArrowUp, 10);
  }
}

function trueArrowDown() {
  if (buttonArrowDown === true && y2 + h / 4 < h) {
    y2 += 5;
    racketRight.style.transform = `translate(0,${y2}px)`;
    setTimeout(trueArrowDown, 10);
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Shift":
      event.preventDefault();
      buttonShift = true;
      trueShift();
      break;
    case "Control":
      event.preventDefault();
      buttonControl = true;
      trueControl();
      break;
    case "ArrowUp":
      event.preventDefault();
      buttonArrowUp = true;
      trueArrowUp();
      break;
    case "ArrowDown":
      event.preventDefault();
      buttonArrowDown = true;
      trueArrowDown();
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "Shift":
      buttonShift = false;
      break;
    case "Control":
      buttonControl = false;
      break;
    case "ArrowUp":
      event.preventDefault();
      buttonArrowUp = false;
      break;
    case "ArrowDown":
      event.preventDefault();
      buttonArrowDown = false;
      break;
    default:
      break;
  }
});
