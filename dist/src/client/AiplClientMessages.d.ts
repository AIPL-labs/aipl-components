import { AppMessage, AppMessageType } from 'ai-worker-common';
import { AiplClientContext } from './AiplClients';
export declare const sendChunkedMessage: ({ message, chunkSize, ctx, }: {
    message: ArrayBuffer;
    chunkSize: number;
    ctx: AiplClientContext;
}) => void;
export declare const dispatch: <T extends AppMessageType = keyof import('ai-worker-common').AppMessageMap>(ctx: AiplClientContext, message: AppMessage<T>) => Promise<void>;
export declare const dispatchAll: (ctx: AiplClientContext, messages: AppMessage[]) => Promise<void>;
export declare const AiplClientMessages: {
    dispatch: <T extends AppMessageType = keyof import('ai-worker-common').AppMessageMap>(ctx: AiplClientContext, message: AppMessage<T>) => Promise<void>;
    dispatchAll: (ctx: AiplClientContext, messages: AppMessage[]) => Promise<void>;
};
//# sourceMappingURL=AiplClientMessages.d.ts.map