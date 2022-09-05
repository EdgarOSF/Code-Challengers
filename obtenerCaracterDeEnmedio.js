function getMiddle(string) {
  let mid = string.length / 2;
  return (string.length % 2 === 0) ? string.slice(mid - 1, mid + 1) : string.slice(mid, mid + 1);
}

//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

// describe('GetMiddle', function () {
//   it('Tests', function () {
//     Test.assertEquals(getMiddle('test'), 'es');
//     Test.assertEquals(getMiddle('testing'), 't');
//     Test.assertEquals(getMiddle('middle'), 'dd');
//     Test.assertEquals(getMiddle('A'), 'A');
//   });
// });
