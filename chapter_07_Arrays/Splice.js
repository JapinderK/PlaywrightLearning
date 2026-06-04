let arr = [1, 2, 3, 4, 5, 6, 7];


arr.splice(2, 1);  //remove from 2nd index only one item
console.log(arr);

arr.splice(3, 0, 100); //remove 0 element from 3rd index and add 100 on it -ADD
console.log(arr);


arr.splice(3, 1, 100); //remove 1 element from 3rd index and replace 100 on it -ADD
console.log(arr);

arr.splice(1, 2, 10, 20); //replace 2 elements from index 2
console.log(arr);