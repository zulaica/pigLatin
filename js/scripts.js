var pigLatin = function(word) {
  if (word[0].match(/[aeiou]/)) {
    word += "ay";
  } else {
    var pre = word.match(/\b([bcdfghjklmnprstvwxyz]|qu)+/)[0];
    var post = word.slice(pre.length);
    var word = post + pre + "ay";
  }
  return word;
};
