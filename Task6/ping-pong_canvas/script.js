const container = document.querySelector(".container");

const buttonStart = document.createElement("button");
buttonStart.classList.add("button-start");
buttonStart.textContent = "Старт!";
container.prepend(buttonStart);

const score = document.createElement("div");
let playerLeft = 0;
let playerRight = 0;
score.classList.add("score");
score.innerHTML = `${playerLeft}:${playerRight}`;
container.prepend(score);

const drawCanvas = function () {
  const settings = {
    canvas: null,
    ctx: null,
    bufferCanvas: null,
    bufferCtx: null,
  };

  const racketWidth = canvas.width / 50;
  const racketHeight = canvas.height / 4;
  const ballRadius = canvas.height / 20;
  const fontSize = canvas.height / 11;

  let winner = "";
  let timer = "";

  let y1 = 0;
  let y2 = 0;
  let ballCenterX = canvas.width / 2;
  let ballCenterY = canvas.height / 2;

  buttonStart.addEventListener("click", startGame);

  let start;
  function startGame() {
    start = true;
    buttonStart.setAttribute("disabled", "disabled");
    winner = "";
    ballCenterX = canvas.width / 2;
    ballCenterY = canvas.height / 2;
  }

  let buttonControl = true;
  let buttonShift = true;
  let buttonArrowUp = true;
  let buttonArrowDown = true;

  function trueShift() {
    if (buttonShift === true && y1 > 0) {
      y1 -= 5;
      setTimeout(trueShift, 10);
    }
  }
  function trueControl() {
    if (buttonControl === true && y1 + racketHeight < canvas.height) {
      y1 += 5;
      setTimeout(trueControl, 10);
    }
  }
  function trueArrowUp() {
    if (buttonArrowUp === true && y2 > 0) {
      y2 -= 5;
      setTimeout(trueArrowUp, 10);
    }
  }
  function trueArrowDown() {
    if (buttonArrowDown === true && y2 + racketHeight < canvas.height) {
      y2 += 5;
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
        event.preventDefault();
        buttonShift = false;
        break;
      case "Control":
        event.preventDefault();
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

  function drawFieldGame() {
    //рисуем поле
    settings.bufferCtx.fillStyle = "#f0ee7e";
    settings.bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawRackers() {
    //левая ракетка
    settings.bufferCtx.fillStyle = "#09aa57";
    settings.bufferCtx.fillRect(0, y1, racketWidth, racketHeight);
    //правая ракетка
    settings.bufferCtx.fillStyle = "#191497";
    settings.bufferCtx.fillRect(
      canvas.width - racketWidth,
      y2,
      racketWidth,
      racketHeight
    );
  }

  function drawBall() {
    settings.bufferCtx.fillStyle = "red";
    settings.bufferCtx.beginPath();
    settings.bufferCtx.arc(
      ballCenterX,
      ballCenterY,
      ballRadius,
      0,
      2 * Math.PI
    );
    settings.bufferCtx.fill();
  }

  let i = 3;
  function timerF() {
    start = false;
    if (playerLeft === 5 || playerRight === 5) {
      winner =
        playerLeft === 5 ? "player-left победил!" : "player-right победил!";
      buttonStart.removeAttribute("disabled");
      playerLeft = 0;
      playerRight = 0;
      score.innerHTML = `${playerLeft}:${playerRight}`;
      return;
    }
    timer = `${i} `;
    i--;
    if (i < 0) {
      timer = "";
      i = 3;
      startGame();
    } else {
      setTimeout(timerF, 1000);
    }
  }

  let speedX = Math.random() * 3 + 2;
  let speedY = Math.random() * 3 + 2;

  function moveBall() {
    ballCenterX += speedX;
    // дотронулся ли мяч до левой ракетки
    if (ballCenterX - ballRadius < racketWidth) {
      if (
        ballCenterY - ballRadius >= y1 &&
        ballCenterY - ballRadius <= y1 + racketHeight
      ) {
        speedX = -speedX;
        ballCenterX = racketWidth + ballRadius;
      }
    }
    // дотронулся ли мяч до правой ракетки
    if (ballCenterX + ballRadius > canvas.width - racketWidth) {
      if (ballCenterY >= y2 && ballCenterY <= y2 + racketHeight) {
        speedX = -speedX;
        ballCenterX = canvas.width - racketWidth - ballRadius;
      }
    }
    if (ballCenterX - ballRadius < 0) {
      playerRight++;
      score.innerHTML = `${playerLeft}:${playerRight}`;
      timerF();
      return;
    }

    if (ballCenterX + ballRadius > canvas.width) {
      playerLeft++;
      score.innerHTML = `${playerLeft}:${playerRight}`;
      timerF();
      return;
    }
    ballCenterY += speedY;
    // вылетел ли мяч ниже пола
    if (ballCenterY + ballRadius > canvas.height) {
      speedY = -speedY;
      ballCenterY = canvas.height - ballRadius;
    }
    // вылетел ли мяч выше потолка
    if (ballCenterY - ballRadius < 0) {
      speedY = -speedY;
      ballCenterY = ballRadius;
    }
  }

  function drawText() {
    settings.bufferCtx.font = `${fontSize}px Georgia`;
    settings.bufferCtx.fillStyle = "red";
    settings.bufferCtx.textAlign = "center";
    settings.bufferCtx.textBaseline = "middle";
    settings.bufferCtx.fillText(winner, canvas.width / 2, canvas.height / 2);
    settings.bufferCtx.fillStyle = "red";
    settings.bufferCtx.fillText(timer, canvas.width / 2, canvas.height / 2);
  }

  function animateGame() {
    drawFieldGame();
    drawRackers();
    if (start) {
      moveBall();
      drawBall();
    }
    drawText();
    settings.ctx.drawImage(
      settings.bufferCanvas,
      0,
      0,
      settings.canvas.width,
      settings.canvas.height
    );
    requestAnimationFrame(animateGame);
  }

  settings.canvas = document.getElementById("canvas");
  settings.ctx = settings.canvas.getContext("2d");

  settings.bufferCanvas = document.createElement("canvas");
  settings.bufferCtx = settings.bufferCanvas.getContext("2d");
  settings.bufferCtx.canvas.width = settings.ctx.canvas.width;
  settings.bufferCtx.canvas.height = settings.ctx.canvas.height;

  requestAnimationFrame(animateGame);
};
drawCanvas();
