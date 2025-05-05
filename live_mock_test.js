/* Your Queston: Count how many even numbers are in an array */
const nums = [1, 2, 3, 4, 5, 6]; // Output: 3

let evenCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenCount++;
  }
}
console.log(evenCount);
