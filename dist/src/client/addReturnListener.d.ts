export declare const addReturnListener: <T>({ onReturn, maxWaitMs, returnId, onTimeout, stream, }: {
    onReturn: (data: T) => Promise<void | undefined | boolean> | void | undefined | boolean;
    onTimeout?: () => void;
    maxWaitMs?: number;
    returnId?: string;
    stream?: boolean;
}) => string;
//# sourceMappingURL=addReturnListener.d.ts.map