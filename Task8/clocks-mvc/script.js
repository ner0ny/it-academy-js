function Clock() {
  let myView = null;
  let date = null;
  let hour = null;
  let min = null;
  let sec = null;
  let timeZone = null;
  let timer = null;

  this.init = function (view, timezone) {
    myView = view;
    timeZone = timezone;

    this.currentTime();
    this.timer();
  };

  this.currentTime = function () {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    let secRotate = (seconds * 360) / 60 - 90;
    let minRotate = (minutes * 360) / 60 - 90;
    let hourRotate = ((hours + timeZone) * 360) / 12 - 90;
    if (minutes > 30) {
      hourRotate = ((hours + timeZone + 0.75) * 360) / 12 - 90;
    }

    const modelData = {
      seconds: secRotate,
      minutes: minRotate,
      hours: hourRotate,
    };
    myView.update(modelData);
  };

  this.timer = function () {
    timer = setInterval(this.currentTime, 1000);
  };

  this.stopTimer = function () {
    clearInterval(timer);
  };
}

//clockViewDom.js
function ClockViewDom() {
  let myField = null; // внутри какого элемента DOM наша вёрстка
  //создаем стрелки
  const lineSec = document.createElement("div");
  lineSec.classList.add("seconds-arrow");
  const lineMin = document.createElement("div");
  lineMin.classList.add("minutes-arrow");
  const lineHour = document.createElement("div");
  lineHour.classList.add("hours-arrow");
  //инициализирующий метод
  this.init = function (container) {
    myField = container;

    //создаем основной циферблат и стрелки,добавляем им классы
    const main = document.createElement("div");
    main.classList.add("main");
    myField.append(main);

    const bigCircle = document.createElement("div");
    bigCircle.classList.add("big-circle");

    const centerCircle = document.createElement("div");
    centerCircle.classList.add("center-circle");
    main.prepend(bigCircle);
    bigCircle.prepend(lineSec, lineMin, lineHour, centerCircle);
    //создаем маленькие круги,добавляем в них цифры
    for (let i = 0; i < 12; i++) {
      const smallCircle = document.createElement("div");
      i === 0
        ? (smallCircle.textContent = "12")
        : (smallCircle.textContent = `${i}`);
      smallCircle.classList.add("small-circle");
      bigCircle.prepend(smallCircle);
    }
    const smallCircles = Array.from(myField.querySelectorAll(".small-circle"));
    smallCircles.reverse();
    //console.log(smallCircles);
    //создаем функцию расположения маленьких кругов
    function setPosition() {
      //задаем расположение(длины от центра) и угол для первого круга
      const radiusSec = 160;
      let angle = 0;
      //получаем центр большого круга
      const bigCircleCenterX = bigCircle.offsetLeft + bigCircle.offsetWidth / 2;
      //console.log(bigCircleCenterX);
      const bigCircleCenterY = bigCircle.offsetTop + bigCircle.offsetHeight / 2;
      //console.log(bigCircleCenterY);

      //располагаем все маленькие круги
      for (let i = 0; i < smallCircles.length; i++) {
        let angleRadians = (parseFloat(angle) / 180) * Math.PI;
        //console.log(angleRadians);
        //рассчитываем центр маленьких кругов
        let smallCirclesCenterX =
          bigCircleCenterX + radiusSec * Math.sin(angleRadians);
        let smallCirclesCenterY =
          bigCircleCenterY - radiusSec * Math.cos(angleRadians);
        //console.log(smallCirclesCenterX,smallCirclesCenterY);
        //добавляем инлайновые стили каждому маленькому кругу
        smallCircles[i].style.left =
          Math.round(smallCirclesCenterX - smallCircles[i].offsetWidth / 2) +
          "px";
        smallCircles[i].style.top =
          Math.round(smallCirclesCenterY - smallCircles[i].offsetHeight / 2) +
          "px";
        //console.log(smallCircles[i].style.left,smallCircles[i].style.top);
        angle += 30;
      }
      //высчитываем расположение начальной точки стрелок
      lineSec.style.left = Math.round(bigCircleCenterX - 1) + "px";
      lineSec.style.top = Math.round(bigCircleCenterY) + "px";

      lineMin.style.left = Math.round(bigCircleCenterX - 1) + "px";
      lineMin.style.top = Math.round(bigCircleCenterY) + "px";

      lineHour.style.left = Math.round(bigCircleCenterX - 1) + "px";
      lineHour.style.top = Math.round(bigCircleCenterY) + "px";
    }
    setPosition();
  };

  this.update = function (data) {
    lineSec.style.transform = "rotate(" + data.seconds + "deg)";
    lineMin.style.transform = "rotate(" + data.minutes + "deg)";
    lineHour.style.transform = "rotate(" + data.hours + "deg)";
  };
}

//clockViewSVG.js
function ClockViewSVG() {
  let myField = null; // внутри какого элемента DOM наша вёрстка

  const svgNS = "http://www.w3.org/2000/svg";
  let lineSec = document.createElementNS(svgNS, "line");
  let lineMin = document.createElementNS(svgNS, "line");
  let lineHour = document.createElementNS(svgNS, "line");

  this.init = function (container) {
    myField = container;

    //обертка
    const main = document.createElement("div");
    main.classList.add("main");
    myField.append(main);

    //создаем svg-элемент
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null, "width", 400);
    svg.setAttributeNS(null, "height", 400);
    svg.setAttributeNS(null, "id", "svg2");
    main.append(svg);
    const w = parseFloat(svg.getAttributeNS(null, "width"));
    const h = parseFloat(svg.getAttributeNS(null, "height"));
    //функция,которая отрисовывает все элементы
    function drawSVGElements() {
      //рисуем большой круг
      const bigCircle = document.createElementNS(svgNS, "circle");
      bigCircle.setAttributeNS(null, "cx", w / 2);
      bigCircle.setAttributeNS(null, "cy", h / 2);
      bigCircle.setAttributeNS(null, "r", w > h ? h / 2 - 3 : w / 2 - 3);
      bigCircle.setAttributeNS(null, "fill", "#FFC850");
      bigCircle.setAttributeNS(null, "stroke-width", "3");
      bigCircle.setAttributeNS(null, "id", "bigCircle");
      svg.prepend(bigCircle);

      //рисуем маленькие круги
      for (let i = 0; i <= 11; i++) {
        const smallCircle = document.createElementNS(svgNS, "circle");
        smallCircle.setAttributeNS(null, "r", 30);
        smallCircle.setAttributeNS(null, "fill", "#00B67E");
        svg.append(smallCircle);
        //добавляем для кругов текст
        var textForSmallCircle = document.createElementNS(svgNS, "text");
        textForSmallCircle.setAttributeNS(null, "fill", "black");
        textForSmallCircle.setAttributeNS(null, "font-size", "30px");
        i === 0
          ? (textForSmallCircle.textContent = `12`)
          : (textForSmallCircle.textContent = `${i}`);
        svg.append(textForSmallCircle);
      }
      //рисуем сендную стрелку

      lineSec.setAttributeNS(null, "x1", w / 2);
      lineSec.setAttributeNS(null, "y1", w / 2);
      lineSec.setAttributeNS(null, "x2", h / 2);
      lineSec.setAttributeNS(null, "y2", h / 2 + h / 3);
      lineSec.setAttributeNS(null, "stroke-width", 2);
      lineSec.setAttributeNS(null, "stroke", "black");
      lineSec.setAttributeNS(null, "stroke-linecap", "round");
      lineSec.setAttributeNS(null, "transform-origin", `${w / 2}px ${h / 2}px`);
      lineSec.setAttributeNS(null, "id", "lineSec");
      svg.append(lineSec);
      //рисуем минутную стрелку
      //const lineMin = document.createElementNS(svgNS,'line');
      lineMin.setAttributeNS(null, "x1", w / 2);
      lineMin.setAttributeNS(null, "y1", w / 2);
      lineMin.setAttributeNS(null, "x2", h / 2);
      lineMin.setAttributeNS(null, "y2", h / 2 + h / 3.5);
      lineMin.setAttributeNS(null, "stroke-width", 5);
      lineMin.setAttributeNS(null, "stroke", "black");
      lineMin.setAttributeNS(null, "stroke-linecap", "round");
      lineMin.setAttributeNS(null, "transform-origin", `${w / 2}px ${h / 2}px`);
      lineMin.setAttributeNS(null, "id", "lineMin");
      svg.append(lineMin);

      //рисуем стрелку часа
      // const lineHour = document.createElementNS(svgNS,'line');
      lineHour.setAttributeNS(null, "x1", w / 2);
      lineHour.setAttributeNS(null, "y1", h / 2);
      lineHour.setAttributeNS(null, "x2", w / 2);
      lineHour.setAttributeNS(null, "y2", h / 2 + h / 5);
      lineHour.setAttributeNS(null, "stroke-width", 10);
      lineHour.setAttributeNS(null, "stroke", "black");
      lineHour.setAttributeNS(null, "stroke-linecap", "round");
      lineHour.setAttributeNS(
        null,
        "transform-origin",
        `${w / 2}px ${h / 2}px`
      );
      lineHour.setAttributeNS(null, "id", "lineHour");
      svg.append(lineHour);
    }
    //вызываем функцию рисования элементов
    drawSVGElements();
    //функция размещения маленьких кругов
    function setPosition() {
      const smallCircles = Array.from(myField.querySelectorAll("circle"));
      smallCircles.shift(smallCircles[0]);
      const svg = myField.querySelector("#svg2");
      //задаем угол для первого круга и расстояние от центра
      let radius = w / 2.5;
      let angle = 0;
      //высчитываем положение каждого круга
      for (let i = 0; i < smallCircles.length; i++) {
        let angleRadians = (parseFloat(angle) / 180) * Math.PI;
        //console.log(radius,angleRadians,w,h);
        let bigCircleCenterX = w / 2;
        let bigCircleCenterY = h / 2;
        //console.log(bigCircleCenterX,bigCircleCenterY);
        let smallCircleCenterX =
          bigCircleCenterX + radius * Math.sin(angleRadians);
        let smallCircleCenterY =
          bigCircleCenterY - radius * Math.cos(angleRadians);
        //добавляем атрибут который указывает положение х и у каждого круга
        const smallCircleRadius = smallCircles[i].getAttributeNS(null, "r");
        let cx = Math.round(smallCircleCenterX);
        let cy = Math.round(smallCircleCenterY);
        smallCircles[i].setAttributeNS(null, "cx", cx);
        smallCircles[i].setAttributeNS(null, "cy", cy);
        angle += 30;
        //добавляем атрибуты всем text
        const textForSmallCircles = myField.querySelectorAll("text");
        textForSmallCircles[i].setAttributeNS(null, "x", cx);
        textForSmallCircles[i].setAttributeNS(null, "y", cy);
        textForSmallCircles[i].setAttributeNS(null, "text-anchor", "middle");
        textForSmallCircles[i].setAttributeNS(
          null,
          "dominant-baseline",
          "middle"
        );
      }
    }
    //вызываем функцию для расчета расположения
    setPosition();
  };
  //метод поворота стрелок
  this.update = function (data) {
    //изменяем инлайновые стили для стрелок при изменении каждую минуту
    lineSec.style.transform = "rotate(" + (data.seconds - 90) + "deg)";
    lineMin.style.transform = "rotate(" + (data.minutes - 90) + "deg)";
    lineHour.style.transform = "rotate(" + (data.hours - 90) + "deg)";
  };
}

//clockViewCanvas.js
function ClockViewCanvas() {
  let myField = null; // внутри какого элемента DOM наша вёрстка

  let canvas = null;
  let canvasCenterX = null;
  let canvasCenterY = null;
  let radiusOfBigCircle = null;
  let radiusOfSmallCircle = null;
  let fontSizeOfSmallCircle = null;
  let fontSizeOfClocks = null;
  let widthSecArrow = null;
  let widthMinArrow = null;
  let widthHourArrow = null;

  //инициализирующий метод
  this.init = function (container) {
    myField = container;

    canvas = myField.querySelector("canvas");
    canvasCenterX = canvas.width / 2;
    canvasCenterY = canvas.height / 2;
    radiusOfBigCircle = canvas.width / 2;
    radiusOfSmallCircle = canvas.width / 16;
    fontSizeOfSmallCircle = canvas.width / 19;
    fontSizeOfClocks = canvas.width / 14;
    widthSecArrow = canvas.width / 500;
    widthMinArrow = canvas.width / 100;
    widthHourArrow = canvas.width / 50;
  };

  //функция рисования часов
  this.drawClock = function () {
    if (canvas && canvas.getContext("2d")) {
      ctx = canvas.getContext("2d");
      //рисуем круг
      ctx.fillStyle = "#FFC850";
      ctx.beginPath();
      ctx.arc(canvasCenterX, canvasCenterY, radiusOfBigCircle, 0, 2 * Math.PI);
      ctx.fill();
      //рисуем маленькие круги
      const radius = canvas.width / 2.5; //расстояние от центра до маленьких кругов
      let angle = 0;
      for (let i = 0; i <= 11; i++) {
        let angleRadians = (parseFloat(angle) / 180) * Math.PI;
        //высчитываем центр маленьких кругов
        let smallCircleCenterX =
          canvasCenterX + radius * Math.sin(angleRadians);
        let smallCircleCenterY =
          canvasCenterY - radius * Math.cos(angleRadians);
        //рисуем круги
        ctx.strokeStyle = "#00B67E";
        ctx.fillStyle = "#00B67E";
        ctx.beginPath();
        ctx.arc(
          smallCircleCenterX,
          smallCircleCenterY,
          radiusOfSmallCircle,
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.stroke();
        //добавляем текст
        let theString;
        i === 0 ? (theString = "12") : (theString = `${i}`);
        ctx.font = `${fontSizeOfSmallCircle}px Arial`;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(theString, smallCircleCenterX, smallCircleCenterY);

        angle += 30;
      }
    }
  };

  this.blank = function () {
    if (canvas && canvas.getContext("2d")) {
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  this.update = function (data) {
    if (canvas && canvas.getContext("2d")) {
      ctx = canvas.getContext("2d");
      this.blank();
      this.drawClock();
      ctx.strokeStyle = "black";
      ctx.lineCap = "round";

      //часы
      ctx.translate(canvasCenterX, canvasCenterY);
      ctx.rotate((Math.PI / 180) * (data.hours - 90));
      ctx.lineWidth = widthHourArrow;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, radiusOfBigCircle / 2);
      ctx.stroke();
      ctx.resetTransform();

      //минуты
      ctx.translate(canvasCenterX, canvasCenterY);
      ctx.rotate((Math.PI / 180) * (data.minutes - 90));
      ctx.lineWidth = widthMinArrow;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, radiusOfBigCircle / 1.6);
      ctx.stroke();
      ctx.resetTransform();

      //секуды
      ctx.translate(canvasCenterX, canvasCenterY);
      ctx.rotate((Math.PI / 180) * (data.seconds - 90));
      ctx.lineWidth = widthSecArrow;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, radiusOfBigCircle / 1.3);
      ctx.stroke();
      ctx.resetTransform();
      ctx.lineWidth = 2;
    }
  };
}

function clockControllerButton() {
  let clockModel = null;
  let clockField = null;

  let btnStart = null;
  let btnStop = null;

  this.init = function (model, container) {
    clockModel = model;
    clockField = container;

    btnStop = clockField.querySelector(".btn-stop");
    btnStart = clockField.querySelector(".btn-start");

    btnStop.addEventListener("click", this.stop);
    btnStart.addEventListener("click", this.start);
  };

  this.stop = function () {
    clockModel.stopTimer();
  };

  this.start = function () {
    clockModel.timer();
  };
}

// 1
const clockModel1 = new Clock();
const clockView1 = new ClockViewDom();
const clockController1 = new clockControllerButton();

const clock1 = document.querySelector("#clock1");
clockView1.init(clock1);
clockModel1.init(clockView1, -8);
clockController1.init(clockModel1, clock1);

// 2
const clockModel2 = new Clock();
const clockView2 = new ClockViewDom();
const clockController2 = new clockControllerButton();

const clock2 = document.querySelector("#clock2");
clockModel2.init(clockView2, 0);
clockView2.init(clock2);
clockController2.init(clockModel2, clock2);

// 3
const clockModel3 = new Clock();
const clockView3 = new ClockViewSVG();
const clockController3 = new clockControllerButton();

const clock3 = document.querySelector("#clock3");
clockModel3.init(clockView3, -3);
clockView3.init(clock3);
clockController3.init(clockModel3, clock3);

// 4
const clockModel4 = new Clock();
const clockView4 = new ClockViewSVG();
const clockController4 = new clockControllerButton();

const clock4 = document.querySelector("#clock4");
clockModel4.init(clockView4, -2);
clockView4.init(clock4);
clockController4.init(clockModel4, clock4);

// 5
const clockModel5 = new Clock();
const clockView5 = new ClockViewCanvas();
const clockController5 = new clockControllerButton();

const clock5 = document.querySelector("#clock5");
clockModel5.init(clockView5, 6);
clockView5.init(clock5);
clockController5.init(clockModel5, clock5);

//6
const clockModel6 = new Clock();
const clockView6 = new ClockViewCanvas();
const clockController6 = new clockControllerButton();

const clock6 = document.querySelector("#clock6");
clockModel6.init(clockView6, 7);
clockView6.init(clock6);
clockController6.init(clockModel6, clock6);
