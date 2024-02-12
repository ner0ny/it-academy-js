const userName = document.getElementById("name");
userName.addEventListener("change", addName);

const userBirthday = document.getElementById("user-birthday");
userBirthday.addEventListener("change", addUserBirthday);

const button = document.getElementById("button");
button.addEventListener("click", setValue);
button.disabled = true;

const userData = {};

console.log(localStorage.getItem("userdata"));

//добавляем данные
//выбрала localStorage, т.к. необходимо использовать данные также и после закрытия страницы
function addName() {
  buttonDisable();
}

function addUserBirthday() {
  buttonDisable();
}

//задизейбленная кнопка
function buttonDisable() {
  if (userName.value && userBirthday.value) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function setValue() {
  userData.currentName = userName.value;
  userData.currentUserBirthday = userBirthday.value;
  localStorage.setItem("userdata", JSON.stringify(userData));

  const form = document.querySelector(".form");
  form.classList.add("hidden");
}

if (localStorage.getItem("userdata") !== null) {
  window.addEventListener("DOMContentLoaded", showMessage);

  function showMessage() {
    document.querySelector(".form").style.display = "none";

    const timerContainer = document.createElement("div");
    timerContainer.classList.add("timer__container");
    document.body.append(timerContainer);

    //заголовок с именем
    const title = document.createElement("h2");
    title.classList.add("timer__title");
    title.innerHTML =
      JSON.parse(localStorage.getItem("userdata")).currentName +
      ", до Вашего дня рождения осталось:";
    timerContainer.append(title);

    const birthDayTimer = document.createElement("div");
    birthDayTimer.classList.add("timer");
    timerContainer.append(birthDayTimer);

    const birthdayDate = new Date(
      JSON.parse(localStorage.getItem("userdata")).currentUserBirthday
    );
    const birthdayMonth = birthdayDate.getMonth();
    const birthdayDay = birthdayDate.getDate();
    const timerId = setInterval(tickTimer, 1000);

    //таймер до ДР
    function tickTimer() {
      const now = new Date();
      let birthday = new Date(now.getFullYear(), birthdayMonth, birthdayDay);
      if (birthday < now) {
        birthday = new Date(now.getFullYear() + 1, birthdayMonth, birthdayDay);
      }

      const timeBetweenDates = birthday - now;
      const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
      const month = Math.floor(days / 30);
      const day = days - month * 30;
      const hours = Math.floor(
        (timeBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeBetweenDates % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeBetweenDates % (1000 * 60)) / 1000);

      birthDayTimer.innerHTML = ` ${Math.abs(month)} Месяцев ${Math.abs(
        day
      )} Дней ${Math.abs(hours)} Часов ${Math.abs(minutes)} Минут ${Math.abs(
        seconds
      )} Секунд`;
    }
  }
}
