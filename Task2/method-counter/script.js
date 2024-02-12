function getCounter(arg) {
  const counter = {};

  counter.log = function () {
    console.log(arg);
    return counter;
  };

  counter.count = function (x) {
    arg = arg + x;
    return counter;
  };

  counter.reset = function () {
    arg = 0;
    return counter;
  };

  return counter;
}

const counter = getCounter(5);
counter.log().count(4).log().count(3).log().reset().log().count(8).log();
