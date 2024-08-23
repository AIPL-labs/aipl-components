type EventMap = {
    [event: string]: unknown;
};
type EventListener<K, T> = (props: {
    type: K;
    detail: T;
}) => void;
export declare class EventEmitter<Events extends EventMap> {
    private eventListeners;
    constructor();
    on<K extends keyof Events>(event: K, listener: EventListener<K, Events[K]>): () => void;
    off<K extends keyof Events>(event: K, listener: EventListener<K, Events[K]>): void;
    emit<K extends keyof Events>(event: K, detail: Events[K]): void;
    once<K extends keyof Events>(event: K, listener: EventListener<K, Events[K]>): void;
}
export {};
//# sourceMappingURL=EventEmitter.d.ts.map