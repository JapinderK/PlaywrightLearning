let a = 10;
let b = a++;
console.log(a);  //11
console.log(b);  //10


let  x= 20;
let y = ++x;
console.log(x);  //21
console.log(y);  //21

let n = 100;
console.log(++n + n);   //202

let s = 200;
//console.log(s++); //200
//console.log(++s); //202
console.log(s++ + ++s); //406   //402

let l = 300;
console.log(++l + ++l); //603