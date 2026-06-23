let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let k = 2;

const arrMap = new Map();

for (let i = 0; i < arr.length; i++) {
    if (arrMap.has(arr[i]))
    {
        arrMap.set(arr[i], arrMap.get(arr[i]) + 1);
    } else {
        arrMap.set(arr[i], 1);
    }
}
const result = [];
arrMap.forEach((value, key) => {
    if (value === k) {
        result.push(key);
    }
})
console.log(result);
