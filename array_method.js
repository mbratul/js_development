/* Array Method */

let player_list = ['shakib', 'mashrafee', 'tamim', 'mushfiq', 'riyadh'];

console.log(player_list); // display array list
console.log(player_list[1]); // display array index

/*=======Array Iteration======= */
//For Loop
let number_list = [1,2,3,4,5,6,7]

for (let i = 0; i < number_list.length; i++){
    console.log(number_list[i]);
    
}

//for each loop
/* 
    The forEach() method of Array instances executes a provided function once for each array element.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
number_list.forEach(function (item, index, arr){
    console.log(item, index);    
    console.log(arr);
    
});

player_list.forEach(function (item, index, arr){
    console.log(item, index);    
    console.log(arr);
    
});
/* ======Some Useful Array Method */
// pop() method = The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

let person_list = ['shakib', 'mashrafee', 'tamim'];
console.log(person_list);
person_list.pop(); 
console.log(person_list);
let ignored = person_list.pop();
console.log(ignored);

//push() method = The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
person_list.push('taskin');
console.log(person_list);

//shift() method = The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
person_list.shift();
console.log(person_list);

// unshift() method = The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
person_list.unshift('rony');
console.log(person_list);

/* ============ Multi Dimensional Array =========== */

let multi_array = [
    ['ratul', 'dhaka', 40],
    ['rana', 'bagerhat', 45],
    ['prince', 'singapore', 41,['running', 'cyceling']]
];

console.log(multi_array); //display multidimensional array
console.log(multi_array.length); // display array length
console.log(multi_array[0].length); // display specific array length
console.log(multi_array[2][3].length); // display inside array length
console.log(multi_array[2]); // display inside array length



