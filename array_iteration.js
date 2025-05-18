/* 
    JavaScript Array Iteration
    https://www.w3schools.com/js/js_array_iteration.asp

    https://www.youtube.com/watch?v=59cYAMuER6U&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy&index=71&ab_channel=LearnwithSumit-LWS-Bangladesh

 */

const numbers = [45, 4, 9, 16, 25];

/* 
    JavaScript Array forEach()
    The forEach() method calls a function (a callback function) once for each array element.
    array.forEach method 
*/

function forEachFunction(value, index, array) {
  //   console.log(value);  display the value
  //   console.log(index); display the index of array
  //   console.log(array); display the full array
  //   console.log("-------"); display a single line
}

numbers.forEach(forEachFunction);

/* 
    JavaScript Array map()
    The map() method creates a new array by performing a function on each array element.

    The map() method does not execute the function for array elements without values.

    The map() method does not change the original array.
 */
function mapFunction(value) {
  return value * 2;
}

const newNumber = numbers.map(mapFunction);

console.log(newNumber);

/* 
    JavaScript Array filter()
    The filter() method creates a new array with array elements that pass a test.

    This example creates a new array from elements with a value larger than 10:
 */

function filterFunction(value, index, array) {
  return value > 10;
}
const newNumber1 = numbers.filter(filterFunction);
console.log(newNumber1);

/* 
    JavaScript Array reduce()
    The reduce() method runs a function on each array element to produce (reduce it to) a single value.

    The reduce() method works from left-to-right in the array. See also reduceRight().

    Note that the function takes 4 arguments:

    The total (the initial value / previously returned value)
    The item value
    The item index
    The array itself
 */
function reduceFunction(total, value, index, array) {
  console.log(total);
  console.log("----");

  //return total + value; // display the sum of the array
  return total + value * value; // display total square value of the array
}
const newNumber2 = numbers.reduce(reduceFunction);
console.log(newNumber2);

/* 
    JavaScript Array reduceRight()
    The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

    The reduceRight() works from right-to-left in the array. See also reduce().
 */
function reduceRightFunction(total, value, index, array) {
  console.log(total);
  console.log("----");

  return total + value; // display the sum of the array
  //return total + value * value; // display total square value of the array
}

const newNumber3 = numbers.reduceRight(reduceRightFunction);
console.log(newNumber3);

/* 
    JavaScript Array every()
    The every() method checks if all array values pass a test.

    This example checks if all array values are larger than 18:
 */

function everyFunction(value, index, array) {
  //console.log(value);
  //console.log("----");

  return value > 18; // check all values and return true or false.
}

const newNumber4 = numbers.every(everyFunction);
console.log(newNumber4);

/* 
    JavaScript Array some()
    The some() method checks if some array values pass a test.

    This example checks if some array values are larger than 18:
 */

function someFunction(value, index, array) {
  //console.log(value);
  //console.log("----");

  return value > 18; // check all values if one value is match then return true else return false.
}

const newNumber5 = numbers.some(someFunction);
console.log(newNumber5);
