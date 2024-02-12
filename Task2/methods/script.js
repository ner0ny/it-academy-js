//1
let numbers = [2, 3, 5, 7, 11, 13, 17];

function currentSums(numbers) {
  let result = [];
  let sums = [];
  numbers.reduce((accumulator, currentValue) => {
    if (sums.length === 0) {
      sums.push(`${currentValue}`);
    } else {
      sums.push(`${sums[sums.length - 1]} + ${currentValue}`);
    }
    result.push(accumulator + currentValue);
    return accumulator + currentValue;
  }, 0);
  return console.log(`[${sums}] = [${result}]`);
}

currentSums(numbers);

//2
const str = "Каждый охотник желает знать, где сидит фазан.";

function firstLettersFromString(str) {
  const strSplited = str.split(" ");
  const letters = strSplited.map((word) => word.charAt(0));
  return letters;
}

console.log(firstLettersFromString(str));

//3
const startArray = [-1, 2, 3.5, -12, 4, 1.25, 16];

function filteredArray(startArray) {
  const result = startArray.filter((number) => {
    if (number >= 0 && Number.isInteger(number)) {
      return number;
    }
  });
  return result;
}

console.log(filteredArray(startArray));

// 4
const array1 = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
const array2 = [0, 2, 0, 4, 0, 6];
const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function moveZeros(array) {
  array.sort(function (a, b) {
    if (a === 0) return 1;
    if (b === 0) return -1;
  });
  return array;
}

console.log(moveZeros(array1));
console.log(moveZeros(array2));
console.log(moveZeros(array3));

//5
function changeArray(array) {
  let result = [];
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];

  if (array.length % 2 === 0) {
    temp1 = array.slice(0, array.length / 2);
    temp2 = array.slice((array.length + 1) / 2);

    result = temp2.concat(temp1);
  } else {
    temp1 = array.slice(0, -(array.length + 1) / 2);
    temp2 = array.slice((array.length + 1) / 2);
    temp3 = array.slice((array.length - 1) / 2, -(array.length - 1) / 2);

    result = temp2.concat(temp3).concat(temp1);
  }

  console.log(result);
}

changeArray([1, 2, 3, 4, 5]);
changeArray([1, 2]);
changeArray([1, 2, 3, 4, 5, 6, 7, 8]);
