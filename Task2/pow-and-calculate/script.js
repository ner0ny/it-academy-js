function pow(number1) {
  const pw = function (number2) {
    let result = number1;

    if (number2 > 0) {
      for (i = 0; i < number2 - 1; i++) {
        result = result * number1;
      }
    } else if (number2 === 0) {
      result = 1;
    } else if (number2 < 0) {
      for (i = 0; i < -number2 - 1; i++) {
        result = result * number1;
      }
      result = 1 / result;
    }

    console.log(number1 + "^" + number2 + " = " + result);
  };
  return pw;
}

function calculate(number1) {
  const calc = function (sign) {
    const cal = function (number2) {
      let result;

      if (sign === "/" && number2 === 0) {
        console.log(
          number1 + sign + number2 + " = Ошибка (на ноль делить нельзя)"
        );
      } else {
        switch (sign) {
          case "+":
            result = number1 + number2;
            break;
          case "-":
            result = number1 - number2;
            break;
          case "/":
            result = number1 / number2;
            break;
          case "*":
            result = number1 * number2;
            break;
        }
        console.log(number1 + sign + number2 + " = " + result);
      }
    };
    return cal;
  };
  return calc;
}

pow(-2)(3);
calculate(1)("+")(2);

pow(4)(2);
calculate(3)("*")(7);

pow(16)(0);
calculate(15)("/")(3);

pow(2)(-3);
calculate(2)("/")(0);
