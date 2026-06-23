/*
    Check if a number is a perfect number.

    sum of all proper divisors

    Example:
    6 ==> 1,2,3,6 ==> 1+2+3 = 6
    28 ==> 1,2,4,7,14,28 ==> 1+2+4+7+14
*/

// let number = 28,
//   sumOfProperDivisors = 0;

// for (let i = 1; i < number; i++) {
//   if (number % i == 0) {
//     sumOfProperDivisors += i;
//   }
// }
/*
    Time Complexity = O(n) ==> Loop will run for n-1 times.
    Space Complexity = O(1)

*/

let number = 28,
  sumOfProperDivisors = 1;

for (let i = 2; i * i <= number; i++) {
  if (number % i == 0) {
    sumOfProperDivisors += i;
    if (i !== number / i) {
      // pairing officer
      sumOfProperDivisors += number / i;
    }
  }
}

if (sumOfProperDivisors === number) {
  console.log(`${number} is a perfect number`);
} else {
  console.log(`${number} is not a perfect number`);
}

/*
    Time Complexity = O(√n) ==> loop run for i * i <= number i.e. i <= √number
    Space Complexity = O(1)

*/
