// let month = prompt("Введите номер месяца");
// while (
//   isNaN(month) ||
//   Boolean(month) === false ||
//   month === 0 ||
//   month < 0 ||
//   month % 1 !== 0 ||
//   month > 12
// ) {
//   month = prompt("Введите номер месяца. Например, 3");
//   month = parseFloat(month);
// }

// let year = prompt("Введите год");
// while (
//   isNaN(year) ||
//   Boolean(year) === false ||
//   year === 0 ||
//   year < 0 ||
//   year % 1 !== 0
// ) {
//   year = prompt("Введите год. Например, 2023");
//   year = parseFloat(year);
// }

let month = 12;
let year = 2000;

function createCalendar(month, year) {
  let date = new Date(year, month - 1);
  let monthName = date.toLocaleString("default", { month: "long" });
  monthName = monthName[0].toUpperCase() + monthName.slice(1);

  let table = `<div id="buttons"><button id="prevYear"><<</button><button id="prevMonth"><</button>${monthName} ${year} года<button id="nextMonth">></button><button id="nextYear">>></button></div><table id="table"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;

  for (let i = 0; i < getDay(date); i++) {
    table += "<td></td>";
  }
  while (date.getMonth() === month - 1) {
    table += "<td>" + date.getDate() + "</td>";

    if (getDay(date) % 7 === 6) {
      table += "</tr><tr>";
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += "<td></td>";
    }
  }

  table += "</tr></table>";

  calendar.innerHTML = table;

  const body = document.querySelector("body");
  body.style.backgroundColor = "#445566";

  const tableEl = document.getElementById("table");
  tableEl.style.margin = "0 auto";

  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    td[i].style.backgroundColor = "#EEEEEE";
    td[i].style.border = "1px solid #DDDDDD";
    td[i].style.padding = "5px";
  }

  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].style.backgroundColor = "#445566";
    tr[i].style.color = "black";
  }

  calendar.style.backgroundColor = "white";
  calendar.style.maxWidth = "350px";
  calendar.style.margin = "0 auto";
  calendar.style.color = "#666666";
  calendar.style.fontSize = "24px";
  calendar.style.padding = "20px 30px 20px 30px";
  calendar.style.textAlign = "center";
  calendar.style.border = "1px solid red";

  const buttons = document.getElementById("buttons");
  buttons.style.maxWidth = "350px";
  buttons.style.margin = "0 auto 10px";
  buttons.style.position = "relative";

  function getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
  }

  const prevYear = document.getElementById("prevYear");
  const prevMonth = document.getElementById("prevMonth");
  const nextYear = document.getElementById("nextYear");
  const nextMonth = document.getElementById("nextMonth");

  prevYear.style.color = "white";
  prevYear.style.backgroundColor = "red";
  prevYear.style.border = "1px solid red";
  prevYear.style.cursor = "pointer";

  prevMonth.style.color = "white";
  prevMonth.style.backgroundColor = "red";
  prevMonth.style.border = "1px solid red";
  prevMonth.style.cursor = "pointer";
  prevMonth.style.margin = "0 10px";

  nextYear.style.color = "white";
  nextYear.style.backgroundColor = "red";
  nextYear.style.border = "1px solid red";
  nextYear.style.cursor = "pointer";

  nextMonth.style.color = "white";
  nextMonth.style.backgroundColor = "red";
  nextMonth.style.border = "1px solid red";
  nextMonth.style.cursor = "pointer";
  nextMonth.style.margin = "0 10px";

  prevYear.onclick = function () {
    year--;
    createCalendar(month, year);
  };
  prevMonth.onclick = function () {
    month--;
    if (month === 0) {
      month = 12;
      year--;
    }
    createCalendar(month, year);
  };
  nextYear.onclick = function () {
    year++;
    createCalendar(month, year);
  };
  nextMonth.onclick = function () {
    month++;
    if (month === 13) {
      month = 1;
      year++;
    }
    createCalendar(month, year);
  };
}

createCalendar(month, year);
