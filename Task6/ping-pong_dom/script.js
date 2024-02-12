const gameField = document.createElement("div");
gameField.classList.add("field");

const fieldWidth = 700;
const fieldHeight = 400;

gameField.style.width = `${fieldWidth}px`;
gameField.style.height = `${fieldHeight}px`;

document.body.prepend(gameField);

const startButton = document.createElement("button");

startButton.classList.add("button-start");
startButton.textContent = "Старт!";

gameField.prepend(startButton);

function startGame() {
  startButton.disabled = true;
  winner.textContent = "";

  ball.style.display = "block";

  randomBallSpeed();
  requestAnimationFrame(tick);
}

function resetGame() {
  ballInfo.posX = fieldWidth / 2 - ballInfo.width / 2;
  ballInfo.posY = fieldHeight / 2 - ballInfo.width / 2;

  racketLeftInfo.posY = (fieldHeight - 100) / 2;
  racketRightInfo.posY = (fieldHeight - 100) / 2;

  racketLeftInfo.update();
  racketRightInfo.update();
}

startButton.addEventListener("click", startGame);

const score = document.createElement("div");
score.classList.add("score");

let playerLeft = 0;
let playerRight = 0;

score.innerHTML = `${playerLeft}:${playerRight}`;

gameField.prepend(score);

let winner = document.createElement("div");
winner.classList.add("winner");

gameField.append(winner);

const ball = document.createElement("div");
ball.classList.add("ball");

let ballInfo = {
  posX: fieldWidth / 2 - 20,
  posY: fieldHeight / 2 - 20,
  speedX: 2,
  speedY: 4,
  width: 40,
  height: 40,
  update: function () {
    let ball = document.querySelector(".ball");
    ball.style.left = this.posX + "px";
    ball.style.top = this.posY + "px";
  },
};
gameField.append(ball);

const racketLeft = document.createElement("div");
racketLeft.classList.add("racket", "racket__left");
let racketLeftInfo = {
  posX: 0,
  posY: (fieldHeight - 100) / 2,
  speedY: 5,
  width: 10,
  height: 100,

  update: function () {
    racketLeft.style.top = this.posY + "px";
  },
};
gameField.append(racketLeft);

const racketRight = document.createElement("div");
racketRight.classList.add("racket", "racket__right");
let racketRightInfo = {
  posX: 0,
  posY: (fieldHeight - 100) / 2,
  speedY: 5,
  width: 10,
  height: 100,

  update: function () {
    racketRight.style.top = this.posY + "px";
  },
};
gameField.append(racketRight);

let timer = document.createElement("div");
timer.classList.add("timer");
gameField.prepend(timer);

let i = 3;
function gameTimer() {
  ball.style.display = "none";
  if (playerLeft === 5 || playerRight === 5) {
    winner.textContent =
      playerLeft === 5 ? "player-left победитель!" : "player-right победитель!";
    startButton.disabled = false;
    playerLeft = 0;
    playerRight = 0;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    return;
  }

  timer.style.display = "inline";
  timer.textContent = `${i}`;
  i--;

  if (i < 0) {
    timer.style.display = "none";
    i = 3;
    startGame();
  } else {
    setTimeout(gameTimer, 1000);
  }
}

function tick() {
  ballInfo.posX += ballInfo.speedX;

  const pointLeftX = ballInfo.posX;
  const pointRightX = ballInfo.posX + ballInfo.width;

  const pointLeftY = ballInfo.posY + ballInfo.height / 2;
  const pointRightY = ballInfo.posY + ballInfo.height / 2;

  if (pointLeftX === racketLeftInfo.width) {
    if (
      pointLeftY > racketLeftInfo.posY &&
      pointLeftY < racketLeftInfo.posY + racketLeftInfo.height
    ) {
      ballInfo.speedX = -ballInfo.speedX;
      ballInfo.posX = racketLeftInfo.width;
    }
  }

  if (pointRightX === fieldWidth - racketRightInfo.width) {
    if (
      pointRightY > racketRightInfo.posY &&
      pointRightY < racketRightInfo.posY + racketRightInfo.height
    ) {
      ballInfo.speedX = -ballInfo.speedX;
      ballInfo.posX = fieldWidth - racketRightInfo.width - ballInfo.width;
    }
  }

  if (pointRightX > fieldWidth) {
    playerLeft++;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    resetGame();
    gameTimer();
    randomBallSpeed();
    return;
  }

  if (pointLeftX < 0) {
    playerRight++;
    score.innerHTML = `${playerLeft}:${playerRight}`;
    resetGame();
    gameTimer();
    randomBallSpeed();
    return;
  }

  ballInfo.posY += ballInfo.speedY;

  if (ballInfo.posY + ballInfo.height > fieldHeight) {
    ballInfo.speedY = -ballInfo.speedY;
    ballInfo.posY = fieldHeight - ballInfo.height;
  }
  if (ballInfo.posY < 0) {
    ballInfo.speedY = -ballInfo.speedY;
    ballInfo.posY = 0;
  }

  ballInfo.update();
  requestAnimationFrame(tick);
}

let buttonControl = true;
let buttonShift = true;
let buttonArrowUp = true;
let buttonArrowDown = true;

function trueControl() {
  if (
    buttonControl === true &&
    racketLeftInfo.posY < fieldHeight - racketLeftInfo.height
  ) {
    racketLeftInfo.posY += racketLeftInfo.speedY;
    racketLeftInfo.update();
    setTimeout(trueControl, 10);
  }
}
function trueShift() {
  if (buttonShift === true && racketLeftInfo.posY > 0) {
    racketLeftInfo.posY -= racketLeftInfo.speedY;
    racketLeftInfo.update();
    setTimeout(trueShift, 10);
  }
}
function trueArrowUp() {
  if (buttonArrowUp === true && racketRightInfo.posY > 0) {
    racketRightInfo.posY -= racketRightInfo.speedY;
    racketRightInfo.update();
    setTimeout(trueArrowUp, 10);
  }
}
function trueArrowDown() {
  if (
    buttonArrowDown === true &&
    racketRightInfo.posY < fieldHeight - racketRightInfo.height
  ) {
    racketRightInfo.posY += racketRightInfo.speedY;
    racketRightInfo.update();
    setTimeout(trueArrowDown, 10);
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Shift":
      e.preventDefault();
      buttonShift = true;
      trueShift();
      break;
    case "Control":
      e.preventDefault();
      buttonControl = true;
      trueControl();
      break;
    case "ArrowUp":
      e.preventDefault();
      buttonArrowUp = true;
      trueArrowUp();
      break;
    case "ArrowDown":
      e.preventDefault();
      buttonArrowDown = true;
      trueArrowDown();
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Shift":
      e.preventDefault();
      buttonShift = false;
      break;
    case "Control":
      e.preventDefault();
      buttonControl = false;
      break;
    case "ArrowUp":
      e.preventDefault();
      buttonArrowUp = false;
      break;
    case "ArrowDown":
      e.preventDefault();
      buttonArrowDown = false;
      break;
    default:
      break;
  }
});

function randomBallSpeed() {
  if (Math.round(1 + Math.random() * (2 - 1)) === 1) {
    ballInfo.speedX = -ballInfo.speedX;
  }
  if (Math.round(1 + Math.random() * (2 - 1)) === 1) {
    ballInfo.speedY = -ballInfo.speedY;
  }
}
