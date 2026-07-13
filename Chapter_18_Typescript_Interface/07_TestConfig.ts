interface TestConfig{
    browser:string,
    headless: boolean,
    baseURL: string,
    timeout?:number,
    retries?:number

}

const ciConfig:TestConfig={
    browser:"Chrome",
    headless: true,
    baseURL: "http://master-staging.vwo.com"
}

const localConfig:TestConfig={
    browser:"Firefox",
    headless:false,
    baseURL:"http://localhost:8080",
    timeout:40000,
    retries:3
}

console.log("CI:", ciConfig.browser,"| timeout:",ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);