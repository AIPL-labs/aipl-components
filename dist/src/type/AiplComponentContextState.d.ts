import { TypeInfo } from '@mjtdev/engine';
import { AiplClient } from '../client/AiplClients';
export type AiplComponentContextConfig<T extends object = object> = {
    papId: string;
    homeUrl: string;
    typeInfo?: TypeInfo<T>;
};
export type AiplComponentContextState<T extends object = object> = AiplComponentContextConfig<T> & {
    client?: AiplClient;
    componentState: Record<string, string | string[]>;
    updateComponentState: (componentState: Record<string, string | string[]>) => void;
};
//# sourceMappingURL=AiplComponentContextState.d.ts.map