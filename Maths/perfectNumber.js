/*
    Check if a number is a perfect number.

    sum of all proper divisors

    Example:
    6 ==> 1,2,3,6 ==> 1+2+3 = 6
    28 ==> 1,2,4,7,14,28 ==> 1+2+4+7+14
*/

let number = 28,
  sumOfProperDivisors = 0;

for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    sumOfProperDivisors += i;
  }
}

if (sumOfProperDivisors === number) {
  console.log(`${number} is a proper number`);
} else {
  console.log(`${number} is not a proper number`);
}
/*
    Time Complexity = O(n) ==> Loop will run for n-1 times.
    Space Complexity = O(1)

*/
