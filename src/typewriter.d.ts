export declare function typewriter(node: HTMLElement, { speed }: {
    speed?: number | undefined;
}): {
    duration: number;
    tick: (t: number) => void;
};
