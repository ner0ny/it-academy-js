const clock = document.querySelector("canvas");
clock.parentElement.style.display = "block";

let ctx = clock.getContext("2d");

function tick() {
  if (clock && clock.getContext("2d")) {
    const radius = ctx.canvas.height / 2;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    drawBigCircle(radius);
    drawNumbers(radius);
    drawArrows(radius);
    drawTime(radius);
  }
}

function drawBigCircle(radius) {
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FAC76E";
  ctx.fill();
  ctx.closePath();
}

function drawNumbers(radius) {
  const delta = (Math.PI * 2) / 12;
  let angle = 0;
  for (var i = 1; i <= 12; i++) {
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2 + (radius - radius / 5) * Math.cos(angle),
      ctx.canvas.height / 2 + (radius - radius / 5) * Math.sin(angle),
      radius * 0.15,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#4DB181";
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.font = radius * 0.2 + "px serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    if (i > 10) {
      ctx.fillText(
        i - 10,
        ctx.canvas.width / 2 + (radius - radius / 5) * Math.cos(angle),
        ctx.canvas.height / 2 + (radius - radius / 5) * Math.sin(angle)
      );
    } else {
      ctx.fillText(
        i + 2,
        ctx.canvas.width / 2 + (radius - radius / 5) * Math.cos(angle),
        ctx.canvas.height / 2 + (radius - radius / 5) * Math.sin(angle)
      );
    }
    angle += delta;
  }
}

function drawArrows(radius) {
  const times = new Date();
  const hours =
    ((times.getHours() * 60 * 60 +
      times.getMinutes() * 60 +
      times.getSeconds()) /
      (60 * 60 * 12)) *
      Math.PI *
      2 -
    Math.PI / 2;
  const minutes =
    ((times.getMinutes() * 60 + times.getSeconds()) / (60 * 60)) * Math.PI * 2 -
    Math.PI / 2;
  const seconds = (times.getSeconds() / 60) * Math.PI * 2 - Math.PI / 2;

  const x0 = ctx.canvas.width / 2,
    y0 = ctx.canvas.height / 2;
  ctx.beginPath();

  ctx.lineWidth = radius / 25;
  ctx.moveTo(x0, y0);
  ctx.lineTo(
    x0 + (radius - radius / 10) * Math.cos(seconds),
    y0 + (radius - radius / 10) * Math.sin(seconds)
  );
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = radius / 31.25;
  ctx.moveTo(x0, y0);
  ctx.lineTo(
    x0 + (radius - radius / 5) * Math.cos(minutes),
    y0 + (radius - radius / 5) * Math.sin(minutes)
  );
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = radius / 50;
  ctx.moveTo(x0, y0);
  ctx.lineTo(
    x0 + (radius - radius / 1.5) * Math.cos(hours),
    y0 + (radius - radius / 1.5) * Math.sin(hours)
  );
  ctx.stroke();
  ctx.closePath();
}

function drawTime(radius) {
  const date = new Date();
  ctx.fillStyle = "red";
  ctx.font = radius * 0.25 + "px serif";

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  ctx.fillText(`${hours}:${minutes}:${seconds}`, radius, radius * 0.8);
}

window.onload = function () {
  setInterval(tick, 1000);
};
