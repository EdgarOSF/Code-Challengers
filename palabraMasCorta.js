function findShort(s) {
//   const arrayString = s.split(' ');
//   const wordsLength = arrayString.map((word) => {
//     return word.length;
//   });
//   const minLengthWord = Math.min(...wordsLength);
//   console.log(minLengthWord);

return console.log(Math.min(...s.split(' ').map(w => w.length ))); 
}

findShort('bitcoin take over the world maybe who knows perhaps');
findShort('turns out random test cases are easier than writing out basic ones');
findShort("Let's travel abroad shall we");

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//       assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//       assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//     })
//   })
