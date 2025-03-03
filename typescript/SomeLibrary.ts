// SomeLibrary.ts
export interface AppConfig {
    apiUrl: string;
    retryCount: number;
}

export function initializeApp(config: AppConfig): void {
    console.log(`Initializing app with API URL: ${config.apiUrl} and Retry Count: ${config.retryCount}`);
}
