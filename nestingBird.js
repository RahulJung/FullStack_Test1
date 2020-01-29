/*
nestingBird
Write a function nestingBird that, given an array of characters and nested sub-arrays, concatenates the characters and returns the name of the bird in the nest.

nestingBird(['r', 'o', ['b', ['i'], 'n']]); // => 'robin'
*/

function nestingBird(chars) {
  var bird = '';

  for (var i = 0; i < chars.length; i++) {
    var element = chars[i];

    if (Array.isArray(element)) {
      bird += nestingBird(element);
    }
    else {
      bird += element;
    }
  }

  return bird;
}
