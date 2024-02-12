let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  let counter = makeCounter();
  buttons[i].onclick = function () {
    buttons[i].textContent = counter();
  };
}

function makeCounter() {
  let count = 0;
  return function counter() {
    return ++count;
  };
}
