function zero(callback) {
    const value = 0;
  return typeof callback === 'function' ? callback(value) : value;
}
function one(callback) {
    const value = 1;
  return typeof callback === 'function' ? callback(value) : value;
}
function two(callback) {
    const value = 2;
  return typeof callback === 'function' ? callback(value) : value;
}
function three(callback) {
    const value = 3;
  return typeof callback === 'function' ? callback(value) : value;
}
function four(callback) {
    const value = 4;
  return typeof callback === 'function' ? callback(value) : value;
}
function five(callback) {
    const value = 5;
  return typeof callback === 'function' ? callback(value) : value;
}
function six(callback) {
    const value = 6;
  return typeof callback === 'function' ? callback(value) : value;
}
function seven(callback) {
  const value = 7;
  return typeof callback === 'function' ? callback(value) : value;
}
function eight(callback) {
    const value = 8;
  return typeof callback === 'function' ? callback(value) : value;
}
function nine(callback) {
    const value = 9;
  return typeof callback === 'function' ? callback(value) : value;
}

function plus(val1) {
    return function(val2){
        return val1 + val2
      }
}
function minus(val1) {
    return function(val2){
        return val2 - val1
      }
}
function times(val1) {
  return function(val2){
    return val1 * val2
  }
}
function dividedBy(val1) {
    return function(val2){
        return Math.floor(val2 / val1)
      }
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);
