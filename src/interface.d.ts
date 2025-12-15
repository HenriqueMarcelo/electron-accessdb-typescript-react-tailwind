export interface IElectronAPI {
    loadPreferences: () => Promise<void>,
}

declare global {
    interface Window {
        executeSQL: (sql: string) => Promise<any>;
    }
}