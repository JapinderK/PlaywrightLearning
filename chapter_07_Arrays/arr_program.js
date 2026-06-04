let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
// Natural Sorting, lexicographic Sorting)
nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a); // ← Descending
console.log(nums);