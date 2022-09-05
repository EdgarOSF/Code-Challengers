function scramble(str1, str2) {
  let countLetters = Array.prototype.reduce.call(
    str1,
    (acc, actLetter) => {
      acc[actLetter] ? acc[actLetter]++ : (acc[actLetter] = 1);
      return acc;
    },
    {}
  );

  return Array.prototype.every.call(str2, (actLetter) => {
    if (countLetters[actLetter] > 0) {
      countLetters[actLetter]--;
      return true;
    }
    return false;
  });
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('katas', 'steak'));
console.log(scramble('scriptjavx', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));
console.log(scramble('scriptsjava', 'javascripts'));
console.log(scramble('javscripts', 'javascript'));
console.log(scramble('jscripts', 'javascript'));
console.log(scramble('aabbcamaomsccdd', 'commas'));
console.log(scramble('commas', 'commas'));
console.log(scramble('sammoc', 'commas'));

// assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
// assert.strictEqual(scramble('rkqodlw', 'world'), true);
// assert.strictEqual(scramble('katas', 'steak'), false);
// assert.strictEqual(scramble('scriptjavx', 'javascript'), false);
// assert.strictEqual(scramble('scriptingjava', 'javascript'), true);
// assert.strictEqual(scramble('scriptsjava', 'javascripts'), true);
// assert.strictEqual(scramble('javscripts', 'javascript'), false);
// assert.strictEqual(scramble('jscripts', 'javascript'), false);
// assert.strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
// assert.strictEqual(scramble('commas', 'commas'), true);
// assert.strictEqual(scramble('sammoc', 'commas'), true);
