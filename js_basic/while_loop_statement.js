/* 
    while loop statement describe here
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    https://www.geeksforgeeks.org/javascript-control-flow-statements/
    https://javascript.info/while-for
 */
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
let x = 10;
while (x > 0) {
  console.log(x);
  x--;
}
let j = 1;
while (j <= 10) {
  if (j % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
  j++;
}
