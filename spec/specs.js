describe('pigLatin', function() {
  it("adds 'ay' to the end of a word that begins with a vowel", function() {
    expect(pigLatin("orange")).to.equal("orangeay");
  });

  it("moves consonant to end of word and adds 'ay' if word starts with consonant", function() {
    expect(pigLatin("coffee")).to.equal("offeecay");
  });

  it("moves consecutive consonants to the end of the word and adds 'ay' if the word starts with consecutive consonants", function() {
    expect(pigLatin("skate")).to.equal("ateskay");
  });

  it("moves consecutive consonants to the end of the word and adds 'ay' if the word starts with consecutive consonants", function() {
    expect(pigLatin("brrrrrrrrake")).to.equal("akebrrrrrrrray");
  });
});
