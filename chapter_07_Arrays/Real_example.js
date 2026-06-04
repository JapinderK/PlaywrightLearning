let browsers = ["chrome", "safari", "opera", "edge", "firefox"];
console.log(browsers.length);

// browsers.push("chromium");
// console.log(browsers)

// browsers.pop();
// console.log(browsers)

browsers.shift();
console.log(browsers);

for (let i = 0; i < browsers.length; i++)
{
    if (browsers[i] === "opera")
    {
        console.log("Opera is now not supported in selenium");
    }
}