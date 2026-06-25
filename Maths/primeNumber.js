/* Check if a number is prime or not.

    Prime numbers: numbere that have only two factors (1,number) called prime number
    
    Example:
        2 ==> 1,2
        3 ==> 1,3
        5 ==> 1,5
        7 ==> 1,7

*/

let num = 98,
  isPrime = true,
  count = 0;

// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     console.log(`i = ${i}`);
//     isPrime = false;
//     break;
//   }
//   count++;
// }

// console.log(num, isPrime ? "Prime" : "Not Prime", count);

/* 
    Time Complexity = O(n) ==> loop will run for (n-2) times --> O(n)
    Space Compelxity = O(1)
*/

if (num < 2) {
  isPrime = false;
}

for (let i = 2; i * i <= num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
  count++;
}

console.log(num, isPrime ? "Prime" : "Not Prime", count);

/* 
    Time Complexity = O(√n) ==> loop will run for (√n)
    Space Compelxity = O(1)
*/
