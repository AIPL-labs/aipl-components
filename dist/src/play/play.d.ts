import { AiplComponentContextConfig, AiplComponentContextState } from '../type/AiplComponentContextState';
export declare const playConnect: (config: AiplComponentContextConfig) => Promise<string>;
export declare const jsonTextToObject: <T>(text: string) => T | undefined;
export declare const extractJsonText: (markdown: string) => string;
export declare const playAsk: (config: AiplComponentContextState) => Promise<string | undefined>;
export declare const playTypes: (config: AiplComponentContextConfig) => Promise<void>;
//# sourceMappingURL=play.d.ts.map