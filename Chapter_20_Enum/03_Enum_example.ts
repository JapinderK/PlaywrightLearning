enum Browser{
    chrome="Chrome",
    firefox="Firefox",
    Safari="Safari",
    Edge="Edge"
}

function launchBrowser(browser:Browser):void{
    switch(browser){
        case Browser.chrome:
            console.log("Launching Chromium");
            break;
        case Browser.firefox:
            console.log("Launching Firefox");
            break;
        case Browser.firefox:
            console.log("Launching Firefox");
            break;
        case Browser.Safari:
            console.log("Launching Safari");
            break;
    }

}

console.log(Browser.chrome);