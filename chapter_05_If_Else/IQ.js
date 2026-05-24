if ("hello") console.log("String is truthy");
if (42) console.log("Number is truthy");
if ([]) console.log("Empty array is truthy");
if ({}) console.log("Curly braces is truthy");


if (NaN) console.log("Nan is not truthy");
if ("") console.log("Empty is not truthy");
if (null) console.log("Null is truthy");
if (undefined) console.log("String is truthy");
if (0) console.log("String is truthy");

let name = undefined;
if (name)
{
    console.log("Japinder Kaur");
}
else {
    console.log("name is undefined")
}