function quadraticEquation(a, b, c) {
  let D = b * b - 4 * a * c;

  let root;

  if (D < 0) {
    root = "не имеет вещественных корней";
  } else if (D === 0) {
    let x = -(b / (2 * a));
    root = "имеет один корень x = " + x;
    root = `имеет один корень x = ${x}`;
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    root = `имеет корни x1 = ${x1} x2 = ${x2}`;
  }

  if (a === 1) {
    a = "";
  }
  if (b > 0) {
    b = "+ " + b;
  } else {
    b = "- " + -b;
  }

  let quadratic = `${a}x^2 ${b}x + ${c} = 0`;

  console.log(`Уравнение ${quadratic} ${root}`);
}

quadraticEquation(1, -8, 72);
quadraticEquation(1, 12, 36);
quadraticEquation(4, -8, 1);
