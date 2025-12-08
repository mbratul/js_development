/*
    Here we display various data types in JavaScript

URL: https://www.geeksforgeeks.org/interesting-facts-about-javascript-data-types/

*/

/*
                                Primitive vs. Reference Types
JavaScript divides its data types into Primitive types and Reference types, but with some unique behaviors
*/

/*
Primitive Types: Stored directly in memory and immutable like- 
    number, 
    string, 
    boolean, 
    undefined, 
    null, 
    symbol, 
    bigint

Reference Types: Objects and arrays are stored as references.
    objects
    arrays
*/

/*  Primitive Types Number 
    https://www.geeksforgeeks.org/javascript-numbers/
*/

let number_data_type_1 = 786; // number data type example
console.log(number_data_type_1);
console.log(typeof number_data_type_1);

let number_data_type_2 = 0.786; // number data type example
console.log(number_data_type_2);
console.log(typeof number_data_type_2);


/*  Primitive Types String 
    https://www.geeksforgeeks.org/javascript-strings/
*/

let string_data_type_1 = "this is string data type"; // string data type example
console.log(string_data_type_1);
console.log(typeof string_data_type_1);

let string_data_type_2 = 'THIS IS a String Data Type. 123456'; // string data type example
console.log(string_data_type_2);
console.log(typeof string_data_type_2);

/*  Primitive Types Boolean 
    https://www.geeksforgeeks.org/javascript-boolean/
*/
/*
        The Boolean() function is used to explicitly convert a value to its Boolean equivalent. 
        Truthy values return true, while falsy values return false. 
*/

console.log(Boolean("Hello")); // return true 
console.log(Boolean(0)); // return false   

/*  Primitive Types undefined
    https://www.geeksforgeeks.org/undefined-in-javascript/
*/
/*
    Undefined is a type of Data type in JavaScript. It is a primitive value undefined, 
    when a variable is declared and not initialized or not assigned with any value. 
    By default, the variable was stored with an Undefined value. 
 */

    let variable = undefined; // example of undefined variable
    // or
    let newVar; // example of undefined variable
    console.log(typeof newVar);

/*  Primitive Types null
    https://www.geeksforgeeks.org/null-in-javascript/
*/

/* Definition: In JavaScript, `null` indicates the deliberate absence of any object value. It’s a primitive value that denotes the absence of a value or serves as a placeholder for an object that isn’t present. `null` differs from `undefined`, which signifies a variable that has been declared but hasn’t been assigned a value. */

let number = null; // null data type
console.log("Type of number is:" ,typeof number); 

            /* ============ Reference Types ============ */

/*  Reference Types Objects in Javascript 
    https://www.geeksforgeeks.org/objects-in-javascript/
*/
/* Definition: 
An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

There are two primary ways to create an object in JavaScript: 
    > Object Literal and 
    > Object Constructor. 
*/

let obj = {
    name: "Sourav",
    age: 23,
    job: "developer"
};
console.log(obj); // example of object data type
console.log(typeof obj); // example of object data type

/*
    Reference Types Arrays
    https://www.geeksforgeeks.org/javascript-arrays/
*/

/*
    In JavaScript, an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index. Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
*/
// Creating an Empty Array
let empty_array = [];
console.log(empty_array);
console.log(typeof empty_array);

// Creating an Array and Initializing with Values
let array_with_values = [10, 20, 30];
console.log(array_with_values);
console.log(typeof array_with_values);