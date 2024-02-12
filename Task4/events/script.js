//1
const links = document.querySelectorAll("a");
let temp = [];

function linkMouseoverHandler() {
  this.innerHTML = `${this.title} (${this.href})`;
}

function linkMouseoutHandler() {
  for (let i = 0; i < links.length; i++) {
    links[i].innerHTML = temp[i];
  }
}

for (let i = 0; i < links.length; i++) {
  temp.push(links[i].innerHTML);
  links[i].addEventListener("mouseover", linkMouseoverHandler);
  links[i].addEventListener("mouseout", linkMouseoutHandler);
}

//2
const inputValue = document.querySelectorAll(".input-value");

function inputValueBlurHandler() {
  console.log(this.value);
  this.removeEventListener("blur", inputValueBlurHandler);
}

for (let i = 0; i < inputValue.length; i++) {
  inputValue[i].addEventListener("blur", inputValueBlurHandler);
}

//3
const square = document.querySelectorAll("p");

function squareClickHandler() {
  this.innerHTML = Math.pow(this.textContent, 2);
  this.removeEventListener("click", squareClickHandler);
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", squareClickHandler);
}

//4
const inputLength = document.querySelectorAll(".input-length");

function inputLengthBlurHandler() {
  if (this.dataset.length == this.value.length) {
    this.style.borderColor = "green";
  } else {
    this.style.borderColor = "red";
  }
}

for (let i = 0; i < inputLength.length; i++) {
  inputLength[i].addEventListener("blur", inputLengthBlurHandler);
}
