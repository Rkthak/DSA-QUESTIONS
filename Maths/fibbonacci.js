/*  
  Print first n terms of Fibonacci series.  

  n = 10  series: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

let n = 10,
  series = [0, 1];

for (let i = 0; i < n - 2; i++) {
  series.push(series[i] + series[i + 1]);
}

console.log(series.join(", "));

/* 
    Time Complexity = O(n)
    Space Complexity = O(n) ===> depends array length
*/
