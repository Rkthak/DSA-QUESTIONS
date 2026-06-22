// ! 58 Check if a number is an Armstrong number.

// 1**3 + 5**3 + 3**3 = 1+125+27 = 153
// 1**4 + 6**4 + 3**4 + 4**4 = 1+1296+81+256 = 1634

let number = 153;
// let digits = number.toString();

// let i = 0,
//   sum = 0;

// while (i < digits.length) {
//   sum += digits[i] ** digits.length;
//   i++;
// }

// ~ by JAVASCRIPT array method
// let digits = number.toString().split("");

// let sum = digits.reduce((acc, curr) => {
//   return Number(acc) + Number(curr ** digits.length);
// });

/* 
Time Complexity: O(n)

1. toString()  -> O(n)
2. split("")  -> O(n)
3. reduce()   -> O(n)

Overall: O(n)


Space Complexity: O(n)

1. toString() creates a string  -> O(n)
2. split("") creates an array  -> O(n)
3. reduce() uses accumulator   -> O(1)

Overall: O(n)
*/

/*
Approach: Math (%10, Math.floor)

Time Complexity: O(n)
Space Complexity: O(1) === > because no extra reserved data is added like string or array
*/

let count = 0;
let temp = number;
let originalNumber = number; // bcz on every while number become 0

while (temp > 0) {
  count++; // count digits
  temp = Math.floor(temp / 10);
}

//  console.log(`count ${count}, number = ${number}`);

let sum = 0;

while (number > 0) {
  let digit = number % 10;
  sum += digit ** count;
  number = Math.floor(number / 10);
}

// console.log(`count ${count}, number = ${originalNumber}`);

/*
    
*/

if (sum === originalNumber) {
  console.log(`${originalNumber} is an Armstrong number`);
} else {
  console.log(`${originalNumber} is not an Armstrong number`);
}
