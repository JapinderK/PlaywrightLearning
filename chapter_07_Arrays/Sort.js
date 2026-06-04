let fruits = ["cherry", "banana", "apple"];
fruits.sort();
console.log(fruits);

let number = [3, 6, 1, 9, 0, 2];
number.sort();
console.log(number);


let nums = [21, 90, 4, 24, 0, 11, 19, 65];
nums.sort();
console.log(nums);
//natural sorting - only on basis of first character or a number

nums.sort((a, b) => a - b); //Ascending
console.log(nums);
nums.sort((a, b) => b - a); // Descending
console.log(nums);