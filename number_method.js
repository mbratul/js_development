/* Number Methods */
//toString();
//toExponential();
//toFixed();
//Math.round();
//Math.floor();
//Math.pow();
/*
            for reference go to the below website
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

let num = 12.567989;
console.log(num); //display the value
console.log(typeof num); //display data type

console.log(num.toString()); //convert number to string
console.log(typeof num.toString()); //convert number to string

let num2 = 4;
console.log(num2.toExponential()); //display values returns a string representing this number in exponential notation.

let num3 = 12.567989; 
console.log(num3.toFixed()); // Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
console.log(num3.toFixed(2));

let num4 = 12.567989; 
console.log(Math.round(num4)); //static method returns the value of a number rounded to the nearest integer.

let num5 = 12.567989; 
console.log(Math.ceil(num5)); //static method always rounds up and returns the smallest integer greater than or equal to a given number.

let num6 = 12.567989; 
console.log(Math.floor(num6)); //static method always rounds down and returns the largest integer less than or equal to a given number.
/*==== use math power ===== */
console.log(Math.pow(8, 2)); //static method returns the value of a base raised to a power. That is  (Math.pow(x,y) = x square y)
/*
                        Math.random() function definition
    static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
 */
console.log(Math.random()); //generate random number
console.log(Math.random()*100); //generate random number

console.log(Math.round(Math.random()*100)); //generate random round number

console.log(Math.max(45, 50, 67, 105, 844, 245)); //The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.min(45, 50, 67, 105, 844, 245)); //The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
