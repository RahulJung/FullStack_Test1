/*
madLibs
Write a function madLibs that, given a string and an array of words, replaces the asterisks in the string with a word from the words array.

madLibs('My name is * and I am a *.', ['Sean', 'potato']);
// => 'My name is Sean and I am a potato.'
If there are more words in the words array than there are asterisks in the sentence, that's ok! Just ignore the extra words.

madLibs('My name is * and I am a *.', ['Sean', 'potato', 'extra', 'words']);
// => 'My name is Sean and I am a potato.'
If there are fewer words in the words array than there are asterisks in the sentence, start replacing asterisks with words from the front of the array again.

madLibs('Marching is fun: *, *, *, *!', ['left', 'right']);
// => 'Marching is fun: left, right, left, right!'
*/

for (var i = 0; i < segments.length - 1; i++) {
    var segment = segments[i];
    segment += words[nextWordIdx];
    finalSentence += segment;
    nextWordIdx = nextWordIdx + 1 < words.length ? nextWordIdx + 1 : 0;
  }

  finalSentence += segments[segments.length - 1];

  return finalSentence;
}
