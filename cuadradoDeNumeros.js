function squareDigits(num) {
  let cadena = '';
  num
    .toString()
    .split('')
    .forEach((numero) => {
      cadena = cadena.concat(numero * numero);
    });
  return cadena
}

squareDigits(3212);
squareDigits(2112);
squareDigits(0);

// describe('Basic tests', () => {
//   it('squareDigits(3212) should equal 9414', () => {
//     assert.strictEqual(squareDigits(3212), 9414);
//   });

//   it('squareDigits(2112) should equal 4114', () => {
//     assert.strictEqual(squareDigits(2112), 4114);
//   });

//   it('squareDigits(0) should equal 0', () => {
//     assert.strictEqual(squareDigits(0), 0);
//   });
// });
