/* ========= String Method in JavaScript======== */
// for reference follow this url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/*====== Define Property===== */
/*
    A JavaScript property is a member of an object that associates a key with a value. A JavaScript object is a data structure that stores a collection of properties.
    example = str.length. length is a property of string 

    in general property do not add curly braces "()"
    and method add curly braces "()"
 */
let str = "my name is ratul";
console.log(str); //display a string output
console.log(str.length); //display a string length
console.log(str.toUpperCase()); //display text in uppercase
console.log(str.toLowerCase()); //display text in lowercase

console.log(str.slice(0, 2)); //slice a text from start
console.log(str.slice(-5)); //slice a text from end

console.log(str.substring(0, 2)); //slice a text from start

console.log(str.replace('ratul', 'muhtasim billah')); //replace a text but not change the original value
console.log(str);

let str1 = "hello";
let str2 = "world";
//concat() == The concat() method of String values concatenates the string arguments to this string and returns a new string.
console.log(str1.concat(" ", str2)); 
// Expected output: "Hello World"
console.log(str2.concat(" ", str1)); 
// Expected output: "World, Hello"
let hello_people = "hello "
console.log(hello_people.concat("kevin,", " how are you?"));

let remove_space = "     hi remove white space   ";
console.log(remove_space.trim()); 
// trim() = removes whitespace from both ends of this string and returns a new string, without modifying the original string.

let character_search = "hi remove white space";
console.log(character_search.charAt(0)); // display the character

let string_seperator = "hi remove white space";
console.log(string_seperator.split(' ')); // seperate string




