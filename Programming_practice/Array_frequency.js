let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let k = 2;

// arr.sort();
// console.log(arr);
const arrMap = new Map();

for (let i of arr) {
    if (arrMap.has(arr[i])) {
        arrMap.set(arr[i], arrMap.get(arr[i])+ 1);
    } else {
        arrMap.set(arr[i], 1);
    }
}
arrMap.forEach((k,v) => {
    console.log(k, " ",v);
});