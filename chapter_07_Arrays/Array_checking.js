let result = Array.isArray([2, 5, 9, 0]);
console.log(result);

let result2 = Array.isArray(3, 5);
console.log(result2);

//every and some

[80, 90, 95].every(s => s > 60); //true

//Playwright API
[200, 201, 202].every(statuscode => statuscode >= 200);

[80, 60, 90].some(s => s < 70); //true - atleast some values are less than 70