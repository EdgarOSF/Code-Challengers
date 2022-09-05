function highAndLow(numbers) {
  let max = Math.max(...numbers.split(' '));
  let min = Math.min(...numbers.split(' '));
  let resultado = `${max} ${min}`;
  return resultado;
}

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');
highAndLow('1 2 3');

// describe('Example tests', () => {
//   it('Test 1', () => {
//     assert.strictEqual(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
//   });
//   it('Test 2', () => {
//     assert.strictEqual(highAndLow('1 2 3'), '3 1');
//   });
// });
