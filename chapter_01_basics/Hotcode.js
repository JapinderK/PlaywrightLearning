function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++){
    result = add(i, i + 1);
}
console.log("Result of addition is ",result);
//Hotcode is a very complex code which has very complex functionality