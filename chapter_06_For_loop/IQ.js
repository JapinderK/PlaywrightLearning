for (let i = 0; i < 3; i++)
{
    if (i === 1) continue;   //continue means when i===1 then go back to for loop
    console.log(i);
}

let count = 10;
while (count < 5)
{
    console.log(count);
    count++;
}

// let n = 1
// do {
//     console.log(n);  //this will run infintie times since it is missing updation (incre or decre)
// }while (n<3)