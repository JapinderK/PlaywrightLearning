let username = "admin";
let password = "admin123";
let accountLocked = false;

if (username === "admin" && password === "admin123" && !accountLocked)
{
    console.log("Admin access allowed");
} else
{
    console.log("Not allowed");
}