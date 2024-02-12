const tasksListElement = document.querySelector(`.tasks__list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter =
    currentElementCoord.y + currentElementCoord.height / 2;

  const nextElement =
    cursorPosition < currentElementCenter
      ? currentElement
      : currentElement.nextElementSibling;

  return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();

  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;

  const isMoveable =
    activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item`);

  if (!isMoveable) {
    return;
  }

  const nextElement = getNextElement(evt.clientY, currentElement);

  if (
    (nextElement && activeElement === nextElement.previousElementSibling) ||
    activeElement === nextElement
  ) {
    return;
  }
  tasksListElement.insertBefore(activeElement, nextElement); //вставка
  trueValueFunction();
});

function trueValueFunction() {
  const li = document.querySelectorAll(".tasks__item");
  const trueValue = ["HTML", "CSS", "JS", "React", "TS"];
  if (
    li[0].textContent === trueValue[0] &&
    li[1].textContent === trueValue[1] &&
    li[2].textContent === trueValue[2] &&
    li[3].textContent === trueValue[3] &&
    li[4].textContent === trueValue[4]
  ) {
    for (let i = 0; i < 5; i++) {
      li[i].style.border = "2px solid green";
    }
  } else {
    for (let i = 0; i < 5; i++) {
      li[i].style.border = "2px solid red";
    }
  }
}
