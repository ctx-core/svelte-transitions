import { elasticOut } from 'svelte/easing';
export declare function whoosh(node: HTMLElement, params: whoosh_params_I): {
    delay: number;
    duration: number;
    easing: number | typeof elasticOut;
    css: (t: string, _: any) => string;
};
export interface whoosh_params_I {
    delay?: number;
    duration?: number;
    easing?: number;
}
