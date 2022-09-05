function duplicateEncode(word) {
  const arrayWord = word.toLowerCase().split('');
  const caracterDuplicate = arrayWord.map((valorA) => {
    let acc = 0;
    arrayWord.map((valorB) => {
      if (valorB == valorA) {
        ++acc;
      }
    });
    return acc > 1 ? ')' : '(';
  }, 0);
  const result = caracterDuplicate.join('');

  console.log(result);
}

duplicateEncode('din');
duplicateEncode('recede');
duplicateEncode('Success');
duplicateEncode('(( @');
// describe("Duplicate Encoder", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(duplicateEncode("din"),"(((");
//       assert.strictEqual(duplicateEncode("recede"),"()()()");
//       assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//       assert.strictEqual(duplicateEncode("(( @"),"))((");
//     });
//   });
