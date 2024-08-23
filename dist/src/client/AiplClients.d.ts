import { AiplClientState } from './AiplClientState';
import { AppMessageMap } from 'ai-worker-common';
export type AiplClient = ReturnType<typeof createAiplClient>;
export type AiplClientContext = ReturnType<typeof createClientContext>;
export declare const createClientContext: (init?: AiplClientState) => Readonly<{
    update: import('@mjtdev/engine').StateUpdater<Partial<{
        homebaseUrl: string;
        ws: WebSocket;
        sessionId: string;
        appInterfaceId: string;
        authToken: string;
        connectionPath: string;
        maxRetries: number;
        retryBackoffMs: number;
        connecting: boolean;
    }>>;
    get: import('@mjtdev/engine').StateGetter<Partial<{
        homebaseUrl: string;
        ws: WebSocket;
        sessionId: string;
        appInterfaceId: string;
        authToken: string;
        connectionPath: string;
        maxRetries: number;
        retryBackoffMs: number;
        connecting: boolean;
    }>>;
}>;
export declare const createAiplClient: (props?: Partial<{
    authToken: string;
    url: string;
}>) => {
    hello: () => void;
    ping: () => void;
    login: ({ userName, password, }: {
        userName: string;
        password: string;
    }) => Promise<string>;
    papAuth: ({ accessPointId }: {
        accessPointId: string;
    }) => Promise<string>;
    ask: (props: AppMessageMap["chat:ask"]) => Promise<string>;
    log: (message: string, ...extra: unknown[]) => void;
    listPersonas: () => Promise<unknown>;
    startSession: (props: Partial<{
        personaId: string;
        sessionId: string;
    }>) => Promise<unknown>;
};
export declare const AiplClients: {
    createAiplClient: (props?: Partial<{
        authToken: string;
        url: string;
    }>) => {
        hello: () => void;
        ping: () => void;
        login: ({ userName, password, }: {
            userName: string;
            password: string;
        }) => Promise<string>;
        papAuth: ({ accessPointId }: {
            accessPointId: string;
        }) => Promise<string>;
        ask: (props: AppMessageMap["chat:ask"]) => Promise<string>;
        log: (message: string, ...extra: unknown[]) => void;
        listPersonas: () => Promise<unknown>;
        startSession: (props: Partial<{
            personaId: string;
            sessionId: string;
        }>) => Promise<unknown>;
    };
};
//# sourceMappingURL=AiplClients.d.ts.map