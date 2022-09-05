function narcissistic(value) {
  const valores = value.toString().split(''); // [7], [3,7,1]
  const potencia = valores.length; // tamaño del array

  let sumaTotal = valores.reduce((ant, act) => {
    return (ant += act ** potencia);
  }, 0);

  return sumaTotal === value;
}

console.log(narcissistic(7));
console.log(narcissistic(371));

//   describe( "Narcissistic Function", function() {
//     it( "should find small numbers are all narcissistic", function() {
//       Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
//     });

//     it( "should find these numbers are narcissistic", function() {
//       Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
//     });
//   });
