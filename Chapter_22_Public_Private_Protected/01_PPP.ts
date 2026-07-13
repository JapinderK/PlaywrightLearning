class APIClient{
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }
private getAuthHeader(): string {
        return `Bearer ${this.apiKey}`;
    }
    public sendRequest(endpoint: string): void {
        console.log("GET "+this.baseURL + endpoint);
        console.log("Auth Header:", this.getAuthHeader());
        console.log("Timeout:", this.timeout);
    }
}

class UserAPIClient extends APIClient {
    getUserData(): void {
        console.log("Fetching users (timeout: " + this.timeout + " ms)");
        console.log("URL: "+this.baseURL + "/users");
    }
}
let client = new APIClient("https://api.example.com", "my-secret-api-key", 5000);
client.sendRequest("/users");
