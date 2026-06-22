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
let digits = number.toString().split("");

let sum = digits.reduce((acc, curr) => {
  return Number(acc) + Number(curr ** digits.length);
});

if (sum === number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number`);
}
