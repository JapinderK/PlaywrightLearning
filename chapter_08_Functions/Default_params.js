function retry(testName, maxRetry = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetry}, ${delay}ms apart`);
}

retry("Login Test");

retry("Registration test", 5, 2000);