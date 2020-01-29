/*
isPrime
Write a function isPrime that, given a number num, returns true if the number is a prime number; otherwise returns false. A prime number is a number that is greater than 1 and is only divisible by itself and the number 1.

Assume your function will only receive whole numbers greater than 1 as inputs.
*/

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  var divisor = Math.ceil(Math.sqrt(num));

  while (divisor > 1) {
    if (num % divisor === 0) {
      return false;
    }

    divisor--;
  }

  return true;
}
