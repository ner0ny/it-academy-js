let year = prompt('Введите год');
while ((isNaN(year) || (Boolean(year) === false) || year === 0 || year < 0 || year % 1 !== 0)) {
    year = prompt('Введите год. Например, 2023');
    year = parseFloat(year);
}

let month = prompt('Введите номер месяца'); 
while ((isNaN(month) || (Boolean(month) === false) || month === 0 || month < 0 || month % 1 !== 0 || month > 12)) {
    month = prompt('Введите номер месяца. Например, 3');
    month = parseFloat(month);
}

let newMonth = month - 1;
let date = new Date(year, newMonth);

let monthName = date.toLocaleString("default", { month: "long" });
monthName = monthName[0].toUpperCase() + monthName.slice(1);

let table = `<table><tr>${monthName} ${year}</tr></tr><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;

for (let i = 0; i < getDay(date); i++) {
  table += "<td></td>";
}
while (date.getMonth() === newMonth) {
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

function getDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
}
