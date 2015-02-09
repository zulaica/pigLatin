var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word[0];

  vowels.forEach(function(vowel) {
    if (vowel === firstLetter) {
      word += "ay";
    }
  });

  return word;
};
