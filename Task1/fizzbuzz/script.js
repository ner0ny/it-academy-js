function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzzTest() {
  for (let i = 0; i <= 100; i++) {
    console.log(
      (i % 3 === 0 && i % 5 === 0 && "FizzBuzz") ||
        (i % 3 === 0 && "Fizz") ||
        (i % 5 === 0 && "Buzz") ||
        i
    );
  }
}

fizzBuzz();
fizzBuzzTest();
