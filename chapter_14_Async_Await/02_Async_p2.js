function getToken() {
    return Promise.resolve("abc123");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();
// whenever there is a promise returned by any function then we have to use await
//In Playwright - page.goto() is a promise so we will use await