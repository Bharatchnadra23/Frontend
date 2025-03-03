// example.d.ts
export interface AppConfig {
    apiUrl: string;
    retryCount: number;
}

export function initializeApp(config: AppConfig): void;
