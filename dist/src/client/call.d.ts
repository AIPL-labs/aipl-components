import { AppMessageMap } from 'ai-worker-common';
import { AiplClientContext } from './AiplClients';
export declare const call: <T extends keyof AppMessageMap>(ctx: AiplClientContext, type: T, detail: Omit<AppMessageMap[T], "returnId">) => Promise<unknown>;
//# sourceMappingURL=call.d.ts.map