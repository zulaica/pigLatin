var pigLatin = function(word) {
  var counter = 0;

  if ('aeiou'.indexOf(word[0]) != -1 ) {
    word += "ay";
  } else { 
    while ('bcdfghjklmnprstvwxyz'.indexOf(word[counter]) != -1) {
      ++counter;
    }
    var x = counter - word.length;
    var word = word.slice(counter) + word.slice(0,x) +"ay";
  }

  return word;
};
