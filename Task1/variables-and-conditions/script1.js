let width = prompt("Введите ширину");
width = parseFloat(width);
while (isNaN(width) || width <= 0) {
  width = prompt("Введите ширину, например 10");
  width = parseFloat(width);
}

let length = prompt("Введите высоту");
length = parseFloat(length);
while (isNaN(length) || length <= 0) {
  length = prompt("Введите высоту, например 12");
  length = parseFloat(length);
}

let S = width * length;
let P = width * 2 + length * 2;

console.log("Площадь = " + S + ". Периметр = " + P);

if (length === width) {
  console.log("Перед вами квадрат.");
}
