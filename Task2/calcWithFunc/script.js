let zero = (operand) => {
  if (!operand)
    return function () {
      return 0;
    };
  else return operand(0);
};
let one = (operand) => {
  if (!operand)
    return function () {
      return 1;
    };
  else return operand(1);
};
let two = (operand) => {
  if (!operand)
    return function () {
      return 2;
    };
  else return operand(2);
};
let three = (operand) => {
  if (!operand)
    return function () {
      return 3;
    };
  else return operand(3);
};
let four = (operand) => {
  if (!operand)
    return function () {
      return 4;
    };
  else return operand(4);
};
let five = (operand) => {
  if (!operand)
    return function () {
      return 5;
    };
  else return operand(5);
};
let six = (operand) => {
  if (!operand)
    return function () {
      return 6;
    };
  else return operand(6);
};
let seven = (operand) => {
  if (!operand)
    return function () {
      return 7;
    };
  else return operand(7);
};
let eight = (operand) => {
  if (!operand)
    return function () {
      return 8;
    };
  else return operand(8);
};
let nine = (operand) => {
  if (!operand)
    return function () {
      return 9;
    };
  else return operand(9);
};

let plus = (number2) => {
  return function (number1) {
    let result = number1 + number2();
    console.log(`Результат: ${number1} + ${number2()} = ${result}`);
  };
};
let minus = (number2) => {
  return function (number1) {
    let result = number1 - number2();
    console.log(`Результат: ${number1} - ${number2()} = ${result}`);
  };
};
let times = (number2) => {
  return function (number1) {
    let result = number1 * number2();
    console.log(`Результат: ${number1} * ${number2()} = ${result}`);
  };
};
let dividedBy = (number2) => {
  return function (number1) {
    if (number2() === 0) {
      console.log(
        `Результат: ${number1} / ${number2()} = Ошибка (на ноль делить нельзя)`
      );
    } else {
      let result = number1 / number2();
      console.log(`Результат: ${number1} / ${number2()} = ${result}`);
    }
  };
};

seven(times(five()));
four(plus(nine()));
eight(minus(three()));
six(dividedBy(two()));
