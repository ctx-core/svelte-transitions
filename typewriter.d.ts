export declare function typewriter(node: any, { speed }: {
    speed?: number | undefined;
}): {
    duration: number;
    tick: (t: any) => void;
};
