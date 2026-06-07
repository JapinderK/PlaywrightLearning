let env = "staging";

function setupConfig()
{
    let timeout = 1000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env);
console.log(timeout); //ReferenceError: timeout is not defineds