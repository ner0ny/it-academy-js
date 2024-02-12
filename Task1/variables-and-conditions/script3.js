let num = prompt("Введите число");
num = parseFloat(num);
while (isNaN(num)) {
  num = prompt("Введите число, например 12");
  num = parseFloat(num);
}

let even = "";
let integer = "";
let positive = "";

if (num % 2 === 0) {
  even = "чётное";
} else {
  even = "нечётное";
}

if (num % 1 === 0) {
  integer = "целое";
} else {
  integer = "дробное";
}

if (num > 0) {
  positive = "положительное";
} else if (num < 0) {
  positive = "отрицательное ";
}

console.log("Число " + num + " " + even + " " + integer + " " + positive);
