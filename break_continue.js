/*
    break definition:
    The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
 */

let i = 0;

for (i = 0; i < 10; i++) {
  console.log(i);
}
// break the loop before 5
for (i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}
// break the loop after 5
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) break;
}

/*
    definition : continue
    The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
 */
// continue the loop without display 5
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

text = "";
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log(text);
