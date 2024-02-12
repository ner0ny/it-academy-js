let div = document.createElement("div");

document.body.prepend(div);

let header = document.createElement("div");
header.classList.add("header");

let selectMonth = document.createElement("select");
let selectYear = document.createElement("select");

let monthArray = [
  "Выберите месяц",
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let yearArray = [
  "Выберите год",
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

//заполнить селект
selectMonth.innerHTML = "";
for (let i = 0; i <= 12; i++) {
  selectMonth.innerHTML += `<option value=${i}>${monthArray[i]}</option>`;
}
selectYear.innerHTML = "";
for (let i = 0; i < yearArray.length; i++) {
  selectYear.innerHTML += `<option value=${yearArray[i]}>${yearArray[i]}</option>`;
}

header.prepend(selectMonth, selectYear);
div.prepend(header);

//кнопка создать
let createButton = document.createElement("button");
createButton.innerHTML = `Создать`;
header.append(createButton);
createButton.setAttribute("disabled", "disabled");

// кнопка удалить
let deleteButton = document.createElement("button");
deleteButton.innerHTML = `Удалить`;
header.append(deleteButton);
deleteButton.setAttribute("disabled", "disabled");

function createCalcNew(year, month) {
  let table = document.createElement("table");
  div.append(table);
  table.classList.add("table_style");
  table.innerHTML = `<tr><th><button class='button__prev-year'>\u003C\u003C</button></th><th><button class='button__prev-month'>\u003C</button></th><th colspan='3'class='th-month'></th><th><button class='button__next-month'>\u003E</button></th><th><button class='button__next-year'>\u003E\u003E</button></th></tr>`;
  //получаем ячейку для названия месяца в шапке таблицы
  let thMonth = table.querySelector(".th-month");

  function getMonth(month) {
    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    return months[date.getMonth()];
  }

  function createCalendar(year, month) {
    date = new Date(year, month - 1);
    thMonth.innerHTML = `${getMonth(month)} ${year}`;

    function dayInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }

    let daysMonth = dayInMonth(month, year);
    let daysPrevMonth = dayInMonth(month - 1, year);
    let dateLast = new Date(year, month - 1, daysMonth);

    let day = date.getDay();
    let row = `<tr>`;

    // пустые ячейки
    if (day === 0) {
      let count = daysPrevMonth - 5;
      for (let i = 1; i < 7; i++) {
        row += `<td class='white'>${count}</td>`;
        count++;
      }
    } else {
      let count = daysPrevMonth - (day - 2);
      for (let i = 1; i < day; i++) {
        row += `<td class='white'>${count}</td>`;
        count++;
      }
    }

    //заполнение ячейками
    for (let i = 1; i <= daysMonth; i++) {
      if (day % 7 === 1) {
        row += `</tr><tr>`;
      }
      row += `<td> ${i} </td>`;
      day++;
    }

    if (dateLast.getDay() !== 0) {
      let count = 1;
      for (let i = dateLast.getDay() + 1; i <= 7; i++) {
        row += `<td class='white'>${count}</td>`;
        count++;
      }
    }

    row += `</tr>`;

    let tbody = document.createElement("tbody");
    tbody.innerHTML = row;
    table.append(tbody);

    //стили
    let td = document.getElementsByTagName("td");
    for (let i = 0; i < td.length; i++) {
      td[i].classList.add("td");
    }
    let th = document.getElementsByTagName("th");
    for (let i = 0; i < th.length; i++) {
      th[i].classList.add("th");
    }

    //наведение на ячейку
    let tdHover = table.querySelectorAll("tbody");
    tdHover[1].addEventListener("mouseover", function (event) {
      if (event.target.closest("td")) {
        event.target.style.backgroundColor = "lightpink";
      }
    });

    tdHover[1].addEventListener(
      "click",
      function (event) {
        let td = event.target;
        td.classList.add("td-selection");
      },
      { once: true }
    );

    tdHover[1].addEventListener("mouseout", function (event) {
      if (event.target.closest("td")) {
        event.target.style.backgroundColor = "";
      }
    });
  }

  createCalendar(year, month);

  // кнопки
  let prevYearButton = table.querySelector(".button__prev-year");
  prevYearButton.onclick = function () {
    let tbody = table.querySelectorAll("tbody");
    tbody[1].remove();
    year--;
    createCalendar(year, month);
  };

  let prevMonthButton = table.querySelector(".button__prev-month");
  prevMonthButton.onclick = function () {
    let tbody = table.querySelectorAll("tbody");
    tbody[1].remove();
    month--;
    createCalendar(year, month);
  };

  let nextMonthButton = table.querySelector(".button__next-month");
  nextMonthButton.onclick = function () {
    let tbody = table.querySelectorAll("tbody");
    tbody[1].remove();
    if (month < 12) {
      month++;
    } else {
      month = 1;
      year++;
    }
    createCalendar(year, month);
  };

  let nextYearButton = table.querySelector(".button__next-year");
  nextYearButton.onclick = function () {
    let tbody = table.querySelectorAll("tbody");
    tbody[1].remove();
    year++;
    createCalendar(year, month);
  };
}

//задизейбленная кнопка
selectYear.addEventListener("blur", function (event) {
  if (selectMonth.value == 0 || selectYear.value === "Выберите") {
    createButton.setAttribute("disabled", "disabled");
  } else {
    createButton.removeAttribute("disabled");
  }
});

selectMonth.addEventListener("blur", function (event) {
  if (selectYear.value === "Выберите" || selectMonth.value == 0) {
    createButton.setAttribute("disabled", "disabled");
  } else {
    createButton.removeAttribute("disabled");
  }
});

createButton.addEventListener("click", function (event) {
  let month = selectMonth.value;
  let year = selectYear.value;
  createCalcNew(year, month);
  deleteButton.removeAttribute("disabled");
});

deleteButton.addEventListener("click", function (event) {
  let deleteTable = document.querySelector("table");
  deleteTable.remove();
  deleteTable = document.querySelector("table");
  if (!deleteTable) {
    deleteButton.setAttribute("disabled", "disabled");
  }
});
