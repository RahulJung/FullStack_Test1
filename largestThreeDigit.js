/*
Prompt
findLargestThreeDigitNum
Write a function findLargestThreeDigitNum that, given a string of digits between 1 and 9, will return the largest three-digit number from the given string.

var largestNum = getLargestThreeDigitNum('231998132');
console.log(largestNum); // 998
console.log(typeof largestNum); // 'number'
*\


function largestThreeDigitNum(digits) {
  var maxNum = Number(digits.slice(0, 3));

  for (var i = 1; i < digits.length - 2; i++) {
    var nextNum = Number(digits.slice(i, i + 3));
    if (nextNum > maxNum) {
      maxNum = nextNum;
    }
  }

  return maxNum;
}
