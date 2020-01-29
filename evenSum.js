/*
sumEvensOnly
Write a function sumEvensOnly that, given a starting and ending number, returns the sum of the range of numbers between the given starting and ending numbers.

sumEvensOnly(1, 5); // => 6

Range is [1, 2, 3, 4, 5].
Even numbers in that range are 2 and 4.
The sum of 2 and 4 is 6.
*/

function sumEvensOnly(rangeStart, rangeEnd) {
  var sum = 0;

  for (var num = rangeStart; num <= rangeEnd; num++) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}
